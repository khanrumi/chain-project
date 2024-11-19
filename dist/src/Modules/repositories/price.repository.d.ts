import { Repository } from 'typeorm';
import { CryptoPrice } from '../entities/cryptoPrice.entity';
export declare class PriceRepository {
    private readonly priceRepository;
    constructor(priceRepository: Repository<CryptoPrice>);
    savePrice(priceData: Partial<CryptoPrice>): Promise<CryptoPrice>;
}
