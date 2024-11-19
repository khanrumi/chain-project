import { Repository } from 'typeorm';
import { Alert } from '../entities/alerts.entity';
import { AlertDto } from '../dto/alert.dto';
export declare class AlertRepository {
    private readonly alertRepository;
    constructor(alertRepository: Repository<Alert>);
    saveAlert(data: Partial<Alert>): Promise<Alert>;
    findAlerts(query: any): Promise<AlertDto[]>;
    updateAlert(query: any, data: any): Promise<any>;
}
