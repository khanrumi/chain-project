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
exports.SwapController = void 0;
const common_1 = require("@nestjs/common");
const swap_service_1 = require("../services/swap.service");
const swagger_1 = require("@nestjs/swagger");
const query_dto_1 = require("../dto/query.dto");
let SwapController = class SwapController {
    constructor(swapRateService) {
        this.swapRateService = swapRateService;
    }
    async getSwapRate(body) {
        try {
            if (!body || typeof body.ethAmount !== 'number') {
                throw new common_1.BadRequestException('Invalid request body. `ethAmount` is required and must be a number.');
            }
            return await this.swapRateService.calculateSwapRate(body.ethAmount);
        }
        catch (error) {
            console.error('Error in SwapController.getSwapRate:', error);
            throw error;
        }
    }
};
exports.SwapController = SwapController;
__decorate([
    (0, common_1.Post)('rate'),
    (0, swagger_1.ApiOperation)({ summary: 'Get the swap rate for a given ETH amount' }),
    (0, swagger_1.ApiBody)({
        description: 'The ETH amount to calculate the swap rate',
        type: query_dto_1.SwapRateDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successfully calculated swap rate' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid request body' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_dto_1.SwapRateDto]),
    __metadata("design:returntype", Promise)
], SwapController.prototype, "getSwapRate", null);
exports.SwapController = SwapController = __decorate([
    (0, common_1.Controller)('swap'),
    __metadata("design:paramtypes", [swap_service_1.SwapRateService])
], SwapController);
//# sourceMappingURL=swap.controller.js.map