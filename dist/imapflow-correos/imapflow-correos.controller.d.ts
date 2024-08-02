import { ImapService } from './imapflow-correos.service';
export declare class ImapController {
    private readonly imapService;
    constructor(imapService: ImapService);
    fetchEmails(): Promise<{
        emails: any[];
        error?: undefined;
        details?: undefined;
    } | {
        error: string;
        details: any;
        emails?: undefined;
    }>;
}
