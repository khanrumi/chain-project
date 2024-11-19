"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePriceTable1731654628364 = void 0;
const typeorm_1 = require("typeorm");
class CreatePriceTable1731654628364 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'price',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true,
                },
                {
                    name: 'chain',
                    type: 'varchar',
                    length: '20',
                },
                {
                    name: 'tokenName',
                    type: 'varchar',
                    length: '20',
                },
                {
                    name: 'tokenSymbol',
                    type: 'varchar',
                    length: '20',
                },
                {
                    name: 'tokenLogo',
                    type: 'varchar',
                },
                {
                    name: 'price',
                    type: 'decimal',
                },
                {
                    name: 'timestamp',
                    type: 'timestamptz',
                    default: 'NOW()',
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('price');
    }
}
exports.CreatePriceTable1731654628364 = CreatePriceTable1731654628364;
//# sourceMappingURL=1731654628364-CreatePriceTable.js.map