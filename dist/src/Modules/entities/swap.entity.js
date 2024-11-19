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
exports.SwapRate = void 0;
const typeorm_1 = require("typeorm");
let SwapRate = class SwapRate {
};
exports.SwapRate = SwapRate;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SwapRate.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", nullable: true }),
    __metadata("design:type", Number)
], SwapRate.prototype, "ethAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", nullable: true }),
    __metadata("design:type", Number)
], SwapRate.prototype, "btcAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", nullable: true }),
    __metadata("design:type", Number)
], SwapRate.prototype, "ethFee", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", nullable: true }),
    __metadata("design:type", Number)
], SwapRate.prototype, "usdFee", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", nullable: true }),
    __metadata("design:type", Number)
], SwapRate.prototype, "feePercentage", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SwapRate.prototype, "createdAt", void 0);
exports.SwapRate = SwapRate = __decorate([
    (0, typeorm_1.Entity)("swap_rate")
], SwapRate);
//# sourceMappingURL=swap.entity.js.map