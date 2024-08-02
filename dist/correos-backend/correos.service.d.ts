export declare class MailService {
    private transporter;
    constructor();
    sendMail(from: string, to: string, subject: string, text: string, file?: Express.Multer.File): Promise<void>;
    sendMailNotification(to: string, subject: string, text: string): Promise<void>;
}
