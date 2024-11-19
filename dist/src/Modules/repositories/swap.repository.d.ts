import { Repository } from 'typeorm';
import { SwapRate } from '../entities/swap.entity';
export declare class SwapRepository {
    private readonly swapRepository;
    constructor(swapRepository: Repository<SwapRate>);
    savePrice(swapData: Partial<SwapRate>): Promise<SwapRate>;
}
