"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ImapService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImapService = void 0;
const common_1 = require("@nestjs/common");
const Imap = require("node-imap");
let ImapService = ImapService_1 = class ImapService {
    constructor() {
        this.logger = new common_1.Logger(ImapService_1.name);
        const imapOptions = {
            user: 'software.medilink.business@gmail.com',
            password: 'rgab zkky zsej pgci',
            host: 'imap.gmail.com',
            port: 993,
            tls: true,
        };
        this.imap = new Imap(imapOptions);
    }
    openInbox(cb) {
        this.imap.openBox('INBOX', true, cb);
    }
    async fetchEmails() {
        return new Promise((resolve, reject) => {
            this.imap.once('ready', () => {
                this.openInbox((err, box) => {
                    if (err) {
                        this.logger.error('Error opening inbox', err);
                        reject(err);
                        return;
                    }
                    const f = this.imap.seq.fetch('1:3', {
                        bodies: ['HEADER.FIELDS (FROM TO SUBJECT DATE)', 'TEXT'],
                        struct: true,
                    });
                    const messages = [];
                    f.on('message', (msg, seqno) => {
                        this.logger.log(`Message #${seqno}`);
                        const prefix = `(#${seqno}) `;
                        let headers = {};
                        let body = [];
                        msg.on('body', (stream, info) => {
                            if (info.which === 'TEXT') {
                                this.logger.log(`${prefix} Body [${info.which}]`);
                                stream.on('data', (chunk) => {
                                    body.push(chunk);
                                });
                                stream.once('end', () => {
                                    const bodyString = Buffer.concat(body).toString('utf-8');
                                    this.logger.log(`${prefix} Body [${info.which}] received`);
                                    this.logger.log(`${prefix} Body content: ${bodyString}`);
                                });
                            }
                            else {
                                stream.on('data', (chunk) => {
                                    const headerChunk = chunk.toString('utf-8');
                                    headers = Imap.parseHeader(headerChunk);
                                    this.logger.log(`${prefix} Header parsed: ${JSON.stringify(headers)}`);
                                });
                            }
                        });
                        msg.once('attributes', (attrs) => {
                            this.logger.log(`${prefix} Attributes: ${JSON.stringify(attrs, null, 8)}`);
                        });
                        msg.once('end', () => {
                            this.logger.log(`${prefix} Finished`);
                            messages.push({
                                seqno,
                                headers,
                                body: Buffer.concat(body).toString('utf-8'),
                            });
                        });
                    });
                    f.once('error', (err) => {
                        this.logger.error('Fetch error:', err);
                        reject(err);
                    });
                    f.once('end', () => {
                        this.logger.log('Done fetching all messages!');
                        this.imap.end();
                        resolve(messages);
                    });
                });
            });
            this.imap.once('error', (err) => {
                this.logger.error('IMAP error:', err);
                reject(err);
            });
            this.imap.once('end', () => {
                this.logger.log('Connection ended');
            });
            this.imap.connect();
        });
    }
};
exports.ImapService = ImapService;
exports.ImapService = ImapService = ImapService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ImapService);
//# sourceMappingURL=imapflow-correos.service.js.map