import { HourlyPriceHistoryRepository } from '../repositories/priceHourlyHistory.repository';
import { HourlyPriceResponseDto } from '../dto/hourlyPriceResponse.dto';
export declare class HourlyPriceHistoryService {
    private readonly hourlyPriceHistoryRepository;
    constructor(hourlyPriceHistoryRepository: HourlyPriceHistoryRepository);
    fetchHourlyChainData(): Promise<HourlyPriceResponseDto>;
}
