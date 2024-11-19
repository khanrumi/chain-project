import { HourlyPriceHistoryService } from '../services/hourlyPriceHistory.service';
import { PriceQueryDto } from '../dto/query.dto';
export declare class HourlyPriceController {
    private hourlyPriceHistoryService;
    constructor(hourlyPriceHistoryService: HourlyPriceHistoryService);
    ListPriceHstory(res: any, query: PriceQueryDto): Promise<any>;
}
