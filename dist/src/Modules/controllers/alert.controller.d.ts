import { HttpStatus } from '@nestjs/common';
import { AlertService } from '../services/alert.service';
import { AlertDto } from '../dto/alert.dto';
export declare class AlertController {
    private readonly alertService;
    constructor(alertService: AlertService);
    setAlert(body: AlertDto): Promise<{
        status: HttpStatus;
        message: string;
    }>;
}
