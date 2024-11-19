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
exports.ChainController = void 0;
const common_1 = require("@nestjs/common");
const price_service_1 = require("../services/price.service");
const query_dto_1 = require("../dto/query.dto");
const swagger_1 = require("@nestjs/swagger");
let ChainController = class ChainController {
    constructor(chainService) {
        this.chainService = chainService;
    }
    async savePrice(res, query) {
        try {
            const type = query.type || "EVERY_5_MIN";
            const { data, status } = await this.chainService.saveChainData(type);
            if (status == 1) {
                return res.status(common_1.HttpStatus.OK).json({
                    message: 'Chain data saved successfully!',
                    status: 1,
                    result: data,
                });
            }
            else if (status == 2) {
                return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                    message: `.`,
                    status: 0,
                });
            }
            else {
                return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                    message: `Something went wrong, please check logs`,
                    status: 0,
                });
            }
        }
        catch (error) {
            throw new common_1.HttpException(`Sorry! Something went wrong while getting chain data, ${error.message}`, error.status ? error.status : common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.ChainController = ChainController;
__decorate([
    (0, common_1.Post)('save'),
    (0, swagger_1.ApiOperation)({ summary: 'Save chain data for a cryptocurrency' }),
    (0, swagger_1.ApiQuery)({
        name: 'type',
        type: String,
        description: 'Type of data update (e.g., EVERY_HOUR_OF_DAY, EVERY_5_MIN)',
        required: false,
        example: 'EVERY_5_MIN',
    }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, query_dto_1.PriceQueryDto]),
    __metadata("design:returntype", Promise)
], ChainController.prototype, "savePrice", null);
exports.ChainController = ChainController = __decorate([
    (0, swagger_1.ApiTags)('Chain'),
    (0, common_1.Controller)('crypto-price'),
    __metadata("design:paramtypes", [price_service_1.ChainService])
], ChainController);
//# sourceMappingURL=price.controller.js.map