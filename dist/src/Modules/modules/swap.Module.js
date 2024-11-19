"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapModule = void 0;
const common_1 = require("@nestjs/common");
const moralis_api_service_1 = require("../services/moralis-api.service");
const axios_1 = require("@nestjs/axios");
const typeorm_1 = require("@nestjs/typeorm");
const schedule_1 = require("@nestjs/schedule");
const swap_entity_1 = require("../entities/swap.entity");
const swap_repository_1 = require("../repositories/swap.repository");
const swap_service_1 = require("../services/swap.service");
const swap_controller_1 = require("../controllers/swap.controller");
let SwapModule = class SwapModule {
};
exports.SwapModule = SwapModule;
exports.SwapModule = SwapModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule.forFeature([swap_entity_1.SwapRate]),
            schedule_1.ScheduleModule.forRoot(),
        ],
        providers: [
            moralis_api_service_1.MoralisApiService,
            swap_service_1.SwapRateService,
            swap_repository_1.SwapRepository,
        ],
        exports: [swap_service_1.SwapRateService],
        controllers: [swap_controller_1.SwapController],
    })
], SwapModule);
//# sourceMappingURL=swap.Module.js.map