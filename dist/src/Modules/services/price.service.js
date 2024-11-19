"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainService = void 0;
const common_1 = require("@nestjs/common");
const moralis_api_service_1 = require("./moralis-api.service");
const price_repository_1 = require("../repositories/price.repository");
const schedule_1 = require("@nestjs/schedule");
const priceHourlyHistory_repository_1 = require("../repositories/priceHourlyHistory.repository");
const email_service_1 = require("./email.service");
const typeorm_1 = require("typeorm");
let ChainService = class ChainService {
    constructor(moralisApiService, priceRepository, hourlyPriceHistoryRepository, emailService) {
        this.moralisApiService = moralisApiService;
        this.priceRepository = priceRepository;
        this.hourlyPriceHistoryRepository = hourlyPriceHistoryRepository;
        this.emailService = emailService;
    }
    calculatePercentageIncrease(oldPrice, newPrice) {
        return ((newPrice - oldPrice) / oldPrice) * 100;
    }
    async saveChainData(type) {
        try {
            const chain = ['polygon', 'eth'];
            const chainData = await this.moralisApiService.getPrices(chain);
            if (!chainData || chainData.length === 0) {
                return {
                    status: 2,
                    message: 'Failed to fetch price from Moralis API',
                };
            }
            const savedData = await Promise.all(chainData.map(async (data, index) => {
                const body = {
                    chain: data?.tokenName ? 'POLYGON' : 'ETH',
                    tokenName: data?.tokenName || data?.name,
                    tokenSymbol: data?.tokenSymbol || data?.symbol,
                    tokenLogo: data?.tokenLogo || data?.logo,
                    price: data?.usdPrice || data?.usd_price
                };
                let priceData;
                if (type === "EVERY_5_MIN") {
                    priceData = await this.priceRepository.savePrice(body);
                }
                else if (type === "EVERY_HOUR_OF_DAY") {
                    delete body.tokenName;
                    delete body.tokenSymbol;
                    delete body.tokenLogo;
                    priceData = await this.hourlyPriceHistoryRepository.saveHourlyPrice(body);
                }
                else {
                    throw new Error(`Unsupported type: ${type}`);
                }
                if (type === "EVERY_HOUR_OF_DAY") {
                    const previousPriceData = await this.hourlyPriceHistoryRepository.findHourlyPrice({
                        where: { chain: body.chain, timestamp: (0, typeorm_1.LessThan)(new Date()) },
                        order: { timestamp: 'DESC' },
                        take: 1,
                    });
                    console.log(previousPriceData, 'previousPriceData');
                    if (previousPriceData && previousPriceData.length > 0) {
                        const previousPrice = previousPriceData[0].price;
                        const percentageIncrease = this.calculatePercentageIncrease(previousPrice, body.price);
                        if (percentageIncrease > 3) {
                            await this.emailService.sendEmail('hyperhire_assignment@hyperhire.in', `Price Increase Alert for ${body.chain}`, `The price of ${body.chain} has increased by ${percentageIncrease.toFixed(2)}% compared to the price one hour ago.`);
                        }
                    }
                }
                return priceData;
            }));
            if (savedData && savedData.length > 0) {
                return {
                    status: 1,
                    message: 'Chain data saved successfully',
                    data: savedData,
                };
            }
            else {
                return {
                    status: 2,
                    message: 'Failed to save chain data',
                };
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async handleCron() {
        try {
            const type = "EVERY_5_MIN";
            await this.saveChainData(type);
        }
        catch (error) {
            console.error('Error during scheduled task execution:', error.message);
        }
    }
    async hourlyHandleCron() {
        try {
            const type = "EVERY_HOUR_OF_DAY";
            await this.saveChainData(type);
        }
        catch (error) {
            console.error(`Error during scheduled task execution:`, error.message);
        }
    }
};
exports.ChainService = ChainService;
__decorate([
    (0, schedule_1.Cron)('*/5 * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChainService.prototype, "handleCron", null);
__decorate([
    (0, schedule_1.Cron)('0 * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChainService.prototype, "hourlyHandleCron", null);
exports.ChainService = ChainService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [moralis_api_service_1.MoralisApiService,
        price_repository_1.PriceRepository,
        priceHourlyHistory_repository_1.HourlyPriceHistoryRepository,
        email_service_1.EmailService])
], ChainService);
//# sourceMappingURL=price.service.js.map