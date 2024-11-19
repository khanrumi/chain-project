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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapRateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const swap_entity_1 = require("../entities/swap.entity");
const moralis_api_service_1 = require("../services/moralis-api.service");
let SwapRateService = class SwapRateService {
    constructor(moralisApiService, swapRepository) {
        this.moralisApiService = moralisApiService;
        this.swapRepository = swapRepository;
        this.btcAddress = process.env.BTC_ADDRESS;
        this.ethAddress = process.env.ETH_ADDRESS;
        if (!this.btcAddress || !this.ethAddress) {
            throw new common_1.InternalServerErrorException('Environment variables for BTC or ETH address are not defined.');
        }
    }
    async calculateSwapRate(ethAmount) {
        if (!ethAmount || ethAmount <= 0) {
            throw new common_1.BadRequestException('Invalid Ethereum amount. It must be greater than 0.');
        }
        try {
            const ethPrice = await this.moralisApiService.fetchEthPrice(this.ethAddress);
            const btcPrice = await this.moralisApiService.fetchBtcPrice(this.btcAddress);
            if (!ethPrice?.usd_price || !btcPrice?.usdPrice) {
                throw new common_1.InternalServerErrorException('Failed to fetch cryptocurrency prices. Please try again later.');
            }
            const ethToUsdRate = ethPrice.usd_price;
            const btcToUsdRate = btcPrice.usdPrice;
            const ethToBtcRate = ethToUsdRate / btcToUsdRate;
            const feePercentage = 0.03;
            const ethFee = ethAmount * feePercentage;
            const usdFee = ethFee * ethToUsdRate;
            const usableEth = ethAmount - ethFee;
            const btcAmount = usableEth * ethToBtcRate;
            const swapRate = this.swapRepository.create({
                ethAmount,
                btcAmount,
                ethFee,
                feePercentage,
            });
            await this.swapRepository.save(swapRate);
            return {
                btcAddress: this.btcAddress,
                btcAmount: parseFloat(btcAmount.toFixed(8)),
                ethFee: parseFloat(ethFee.toFixed(8)),
                usdFee: parseFloat(usdFee.toFixed(2)),
            };
        }
        catch (error) {
            if (error.name === 'QueryFailedError') {
                throw new common_1.InternalServerErrorException('Database operation failed.');
            }
            console.error('Unexpected error during swap rate calculation:', error);
            throw new common_1.InternalServerErrorException('An unexpected error occurred while calculating the swap rate. Please try again later.');
        }
    }
};
exports.SwapRateService = SwapRateService;
exports.SwapRateService = SwapRateService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(swap_entity_1.SwapRate)),
    __metadata("design:paramtypes", [moralis_api_service_1.MoralisApiService,
        typeorm_2.Repository])
], SwapRateService);
//# sourceMappingURL=swap.service.js.map