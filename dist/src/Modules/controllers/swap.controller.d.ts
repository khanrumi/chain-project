import { SwapRateService } from '../services/swap.service';
import { SwapRateDto } from '../dto/query.dto';
export declare class SwapController {
    private readonly swapRateService;
    constructor(swapRateService: SwapRateService);
    getSwapRate(body: SwapRateDto): Promise<any>;
}
