import { Repository } from 'typeorm';
import { HourlyPriceHistory } from '../entities/hourlyPriceHistory.entity';
export declare class HourlyPriceHistoryRepository {
    private readonly hourlyPriceHistoryRepository;
    constructor(hourlyPriceHistoryRepository: Repository<HourlyPriceHistory>);
    saveHourlyPrice(HourlyPriceeData: Partial<HourlyPriceHistory>): Promise<HourlyPriceHistory>;
    findHourlyPrice(a: any): Promise<HourlyPriceHistory[]>;
}
