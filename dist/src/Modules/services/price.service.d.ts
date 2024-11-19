import { MoralisApiService } from './moralis-api.service';
import { PriceRepository } from '../repositories/price.repository';
import { HourlyPriceHistoryRepository } from '../repositories/priceHourlyHistory.repository';
import { EmailService } from './email.service';
export declare class ChainService {
    private readonly moralisApiService;
    private readonly priceRepository;
    private readonly hourlyPriceHistoryRepository;
    private readonly emailService;
    constructor(moralisApiService: MoralisApiService, priceRepository: PriceRepository, hourlyPriceHistoryRepository: HourlyPriceHistoryRepository, emailService: EmailService);
    private calculatePercentageIncrease;
    saveChainData(type: string): Promise<any>;
    handleCron(): Promise<void>;
    hourlyHandleCron(): Promise<void>;
}
