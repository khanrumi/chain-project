import { Repository } from 'typeorm';
import { SwapRate } from '../entities/swap.entity';
import { MoralisApiService } from '../services/moralis-api.service';
export declare class SwapRateService {
    private readonly moralisApiService;
    private readonly swapRepository;
    private readonly btcAddress;
    private readonly ethAddress;
    constructor(moralisApiService: MoralisApiService, swapRepository: Repository<SwapRate>);
    calculateSwapRate(ethAmount: number): Promise<any>;
}
