"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceModule = void 0;
const common_1 = require("@nestjs/common");
const price_service_1 = require("../services/price.service");
const price_controller_1 = require("../controllers/price.controller");
const moralis_api_service_1 = require("../services/moralis-api.service");
const axios_1 = require("@nestjs/axios");
const typeorm_1 = require("@nestjs/typeorm");
const cryptoPrice_entity_1 = require("../entities/cryptoPrice.entity");
const price_repository_1 = require("../repositories/price.repository");
const schedule_1 = require("@nestjs/schedule");
const priceHourlyHistory_repository_1 = require("../repositories/priceHourlyHistory.repository");
const hourlyPriceHistory_entity_1 = require("../entities/hourlyPriceHistory.entity");
const email_service_1 = require("../services/email.service");
let PriceModule = class PriceModule {
};
exports.PriceModule = PriceModule;
exports.PriceModule = PriceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule.forFeature([cryptoPrice_entity_1.CryptoPrice, hourlyPriceHistory_entity_1.HourlyPriceHistory]),
            schedule_1.ScheduleModule.forRoot(),
        ],
        providers: [
            price_service_1.ChainService,
            moralis_api_service_1.MoralisApiService,
            price_repository_1.PriceRepository,
            priceHourlyHistory_repository_1.HourlyPriceHistoryRepository,
            email_service_1.EmailService
        ],
        exports: [price_service_1.ChainService],
        controllers: [price_controller_1.ChainController],
    })
], PriceModule);
//# sourceMappingURL=price.module.js.map