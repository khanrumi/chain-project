"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourlyPriceHistoryModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const typeorm_1 = require("@nestjs/typeorm");
const priceHourlyHistory_repository_1 = require("../repositories/priceHourlyHistory.repository");
const hourlyPriceHistory_entity_1 = require("../entities/hourlyPriceHistory.entity");
const hourlyPriceHistory_service_1 = require("../services/hourlyPriceHistory.service");
const hourlyPriceHistory_controller_1 = require("../controllers/hourlyPriceHistory.controller");
let HourlyPriceHistoryModule = class HourlyPriceHistoryModule {
};
exports.HourlyPriceHistoryModule = HourlyPriceHistoryModule;
exports.HourlyPriceHistoryModule = HourlyPriceHistoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule.forFeature([hourlyPriceHistory_entity_1.HourlyPriceHistory]),
        ],
        providers: [
            hourlyPriceHistory_service_1.HourlyPriceHistoryService,
            priceHourlyHistory_repository_1.HourlyPriceHistoryRepository
        ],
        exports: [hourlyPriceHistory_service_1.HourlyPriceHistoryService],
        controllers: [hourlyPriceHistory_controller_1.HourlyPriceController],
    })
], HourlyPriceHistoryModule);
//# sourceMappingURL=hourlyPriceHistory.module.js.map