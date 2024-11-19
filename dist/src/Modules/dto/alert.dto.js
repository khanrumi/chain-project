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
exports.AlertDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AlertDto {
}
exports.AlertDto = AlertDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'ethereum',
        description: 'The blockchain network (e.g., ethereum, polygon)',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AlertDto.prototype, "chain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2000,
        description: 'The dollar price threshold for the alert',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], AlertDto.prototype, "dollar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'user@example.com',
        description: 'Email address to receive the alert',
        required: false,
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AlertDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AlertDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], AlertDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AlertDto.prototype, "notified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'ETH',
        description: 'The blockchain network (e.g., ETH, MATIC)',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AlertDto.prototype, "tokenSymbol", void 0);
//# sourceMappingURL=alert.dto.js.map