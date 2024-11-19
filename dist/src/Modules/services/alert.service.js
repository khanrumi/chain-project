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
exports.AlertService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const moralis_api_service_1 = require("../services/moralis-api.service");
const email_service_1 = require("./email.service");
const alert_repository_1 = require("../repositories/alert.repository");
let AlertService = class AlertService {
    constructor(moralisApiService, emailService, alertRepository) {
        this.moralisApiService = moralisApiService;
        this.emailService = emailService;
        this.alertRepository = alertRepository;
    }
    async setAlert(data) {
        const { chain, dollar } = data;
        await this.alertRepository.saveAlert(data);
        return { message: `Alert set for ${chain} at $${dollar}` };
    }
    async checkAlerts() {
        try {
            const alerts = await this.alertRepository.findAlerts({ where: { notified: false } });
            if (!alerts || alerts.length === 0) {
                return {
                    status: 1,
                    message: 'No alerts to check',
                    data: alerts
                };
            }
            const chains = alerts.map(alert => alert.chain);
            const prices = await this.moralisApiService.getPrices(chains);
            for (const alert of alerts) {
                const price = prices.find(p => p?.tokenSymbol === alert?.tokenSymbol || p?.symbol === alert.tokenSymbol);
                if (price) {
                    const dollar = price?.usdPrice || price?.usd_price;
                    if (dollar === alert.dollar) {
                        const email = alert?.email || process.env.DEDEFAULT_EMAIL;
                        await this.emailService.sendEmail(email, `Price Alert: ${alert.chain} Reached $${alert.dollar}!`, `This is a notification that the price for ${alert.chain} has reached your set threshold of $${alert.dollar}.`);
                        await this.alertRepository.updateAlert({ id: alert.id }, { notified: true });
                    }
                }
            }
        }
        catch (error) {
            console.error('Error in checkAlerts method:', error.message);
        }
    }
};
exports.AlertService = AlertService;
__decorate([
    (0, schedule_1.Cron)('*/10 * * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlertService.prototype, "checkAlerts", null);
exports.AlertService = AlertService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [moralis_api_service_1.MoralisApiService,
        email_service_1.EmailService,
        alert_repository_1.AlertRepository])
], AlertService);
//# sourceMappingURL=alert.service.js.map