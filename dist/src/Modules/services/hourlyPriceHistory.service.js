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
exports.HourlyPriceHistoryService = void 0;
const common_1 = require("@nestjs/common");
const priceHourlyHistory_repository_1 = require("../repositories/priceHourlyHistory.repository");
const typeorm_1 = require("typeorm");
let HourlyPriceHistoryService = class HourlyPriceHistoryService {
    constructor(hourlyPriceHistoryRepository) {
        this.hourlyPriceHistoryRepository = hourlyPriceHistoryRepository;
    }
    async fetchHourlyChainData() {
        try {
            const twentyFourHoursAgo = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
            const ethereumHistory = await this.hourlyPriceHistoryRepository.findHourlyPrice({
                where: { chain: 'ETH', timestamp: (0, typeorm_1.MoreThanOrEqual)(twentyFourHoursAgo) },
                order: { timestamp: 'ASC' },
            });
            const polygonHistory = await this.hourlyPriceHistoryRepository.findHourlyPrice({
                where: { chain: 'POLYGON', timestamp: (0, typeorm_1.MoreThanOrEqual)(twentyFourHoursAgo) },
                order: { timestamp: 'ASC' },
            });
            if (ethereumHistory || polygonHistory) {
                return {
                    status: 1,
                    message: 'Hourly price history reterived successfully',
                    data: { ethereumHistory, polygonHistory },
                };
            }
            else {
                return {
                    status: 2,
                    message: 'Failed to retrieve hourly price history'
                };
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.HourlyPriceHistoryService = HourlyPriceHistoryService;
exports.HourlyPriceHistoryService = HourlyPriceHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [priceHourlyHistory_repository_1.HourlyPriceHistoryRepository])
], HourlyPriceHistoryService);
//# sourceMappingURL=hourlyPriceHistory.service.js.map