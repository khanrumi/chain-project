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
exports.AlertController = void 0;
const common_1 = require("@nestjs/common");
const alert_service_1 = require("../services/alert.service");
const alert_dto_1 = require("../dto/alert.dto");
const swagger_1 = require("@nestjs/swagger");
let AlertController = class AlertController {
    constructor(alertService) {
        this.alertService = alertService;
    }
    async setAlert(body) {
        try {
            const response = await this.alertService.setAlert(body);
            return {
                status: common_1.HttpStatus.CREATED,
                message: response.message,
            };
        }
        catch (error) {
            console.error('Error in setAlert:', error.message);
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'Failed to set alert. Please try again later.',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AlertController = AlertController;
__decorate([
    (0, common_1.Post)('set'),
    (0, swagger_1.ApiOperation)({ summary: 'Set an alert for a specific blockchain and dollar value' }),
    (0, swagger_1.ApiBody)({ type: alert_dto_1.AlertDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [alert_dto_1.AlertDto]),
    __metadata("design:returntype", Promise)
], AlertController.prototype, "setAlert", null);
exports.AlertController = AlertController = __decorate([
    (0, common_1.Controller)('alert'),
    __metadata("design:paramtypes", [alert_service_1.AlertService])
], AlertController);
//# sourceMappingURL=alert.controller.js.map