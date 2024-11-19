import { ChainService } from '../services/price.service';
import { PriceQueryDto } from '../dto/query.dto';
export declare class ChainController {
    private chainService;
    constructor(chainService: ChainService);
    savePrice(res: any, query: PriceQueryDto): Promise<any>;
}
