export declare class ImapService {
    private readonly logger;
    private imap;
    constructor();
    private openInbox;
    fetchEmails(): Promise<any[]>;
}
