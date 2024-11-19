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
exports.AlertRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const alerts_entity_1 = require("../entities/alerts.entity");
let AlertRepository = class AlertRepository {
    constructor(alertRepository) {
        this.alertRepository = alertRepository;
    }
    async saveAlert(data) {
        try {
            return this.alertRepository.save(data);
        }
        catch (err) {
            console.log(err);
            throw new Error('Failed to save alerts');
        }
    }
    async findAlerts(query) {
        try {
            return await this.alertRepository.find(query);
        }
        catch (err) {
            console.error(err);
            throw new Error('Failed to fetch hourly price data');
        }
    }
    async updateAlert(query, data) {
        try {
            return await this.alertRepository.update(query, data);
        }
        catch (err) {
            console.error(err);
            throw new Error('Failed to fetch hourly price data');
        }
    }
};
exports.AlertRepository = AlertRepository;
exports.AlertRepository = AlertRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(alerts_entity_1.Alert)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AlertRepository);
//# sourceMappingURL=alert.repository.js.map