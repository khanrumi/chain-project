"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertModule = void 0;
const common_1 = require("@nestjs/common");
const moralis_api_service_1 = require("../services/moralis-api.service");
const axios_1 = require("@nestjs/axios");
const typeorm_1 = require("@nestjs/typeorm");
const schedule_1 = require("@nestjs/schedule");
const email_service_1 = require("../services/email.service");
const alerts_entity_1 = require("../entities/alerts.entity");
const alert_service_1 = require("../services/alert.service");
const alert_controller_1 = require("../controllers/alert.controller");
const alert_repository_1 = require("../repositories/alert.repository");
let AlertModule = class AlertModule {
};
exports.AlertModule = AlertModule;
exports.AlertModule = AlertModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule.forFeature([alerts_entity_1.Alert]),
            schedule_1.ScheduleModule.forRoot(),
        ],
        providers: [
            moralis_api_service_1.MoralisApiService,
            email_service_1.EmailService,
            alert_service_1.AlertService,
            alert_repository_1.AlertRepository,
        ],
        exports: [alert_service_1.AlertService],
        controllers: [alert_controller_1.AlertController],
    })
], AlertModule);
//# sourceMappingURL=alert.Module.js.map