import { MailService } from "./correos.service";
export declare class MailController {
    private readonly mailService;
    constructor(mailService: MailService);
    sendMail(from: string, to: string, subject: string, text: string, file: Express.Multer.File): Promise<{
        message: string;
    }>;
    notificarTurno(to: string, clienteNombre: string, fechaTurno: string): Promise<{
        message: string;
    }>;
}
