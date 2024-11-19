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
exports.MoralisApiService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const dotenv = require("dotenv");
dotenv.config();
let MoralisApiService = class MoralisApiService {
    constructor(httpService) {
        this.httpService = httpService;
        this.apiKey = process.env.MORALIS_API_KEY;
        this.polyUrl = process.env.POLY_URL;
        this.ethUrl = process.env.ETH_URL;
        this.btcUrl = process.env.BTC_URL;
    }
    async fetchPolyPrice(address) {
        try {
            const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get(this.polyUrl, {
                headers: { 'X-API-Key': this.apiKey },
            }));
            return response.data;
        }
        catch (error) {
            throw new Error(`Failed to fetch price for address: ${address}`);
        }
    }
    async fetchEthPrice(address) {
        try {
            const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get(this.ethUrl, {
                headers: { 'X-API-Key': this.apiKey },
            }));
            return response.data.result.find(token => token.name === "Ether");
        }
        catch (error) {
            throw new Error(`Failed to fetch price for address: ${error}`);
        }
    }
    async fetchBtcPrice(address) {
        try {
            const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get(this.btcUrl, {
                headers: { 'X-API-Key': this.apiKey },
            }));
            return response.data;
        }
        catch (error) {
            throw new Error(`Failed to fetch price for address: ${error}`);
        }
    }
    async getPrices(chain) {
        const pricePromises = chain.map(async (chainType) => {
            if (chainType === 'polygon') {
                return this.fetchPolyPrice(this.polyAddress);
            }
            else if (chainType === 'ethereum' || chainType === 'eth') {
                return this.fetchEthPrice(this.ethAddress);
            }
            return null;
        });
        return await Promise.all(pricePromises);
    }
};
exports.MoralisApiService = MoralisApiService;
exports.MoralisApiService = MoralisApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], MoralisApiService);
//# sourceMappingURL=moralis-api.service.js.map