import { MoralisApiService } from '../services/moralis-api.service';
import { EmailService } from './email.service';
import { AlertRepository } from '../repositories/alert.repository';
import { AlertDto } from '../dto/alert.dto';
export declare class AlertService {
    private readonly moralisApiService;
    private readonly emailService;
    private readonly alertRepository;
    constructor(moralisApiService: MoralisApiService, emailService: EmailService, alertRepository: AlertRepository);
    setAlert(data: AlertDto): Promise<{
        message: string;
    }>;
    checkAlerts(): Promise<{
        status: number;
        message: string;
        data: AlertDto[];
    }>;
}
