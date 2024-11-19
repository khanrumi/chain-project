import { HttpService } from '@nestjs/axios';
export declare class MoralisApiService {
    private readonly httpService;
    private readonly apiKey;
    private readonly polyAddress;
    private readonly ethAddress;
    private readonly btcAddress;
    private readonly polyUrl;
    private readonly ethUrl;
    private readonly btcUrl;
    constructor(httpService: HttpService);
    private fetchPolyPrice;
    fetchEthPrice(address: string): Promise<any>;
    fetchBtcPrice(address: string): Promise<any>;
    getPrices(chain: string[]): Promise<any[]>;
}
