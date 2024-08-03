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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const nodeMailer = require("nodemailer");
let MailService = class MailService {
    constructor() {
        this.transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASSWORD
            }
        });
    }
    async sendMail(from, to, subject, text, file) {
        const mailOptions = {
            from,
            to,
            subject,
            text
        };
        if (file) {
            mailOptions.attachments = [
                {
                    filename: file.originalname,
                    content: file.buffer,
                    encoding: 'base64'
                }
            ];
        }
        try {
            await this.transporter.sendMail(mailOptions);
            console.log(`Correo enviado de: ${from} a: ${to}`);
        }
        catch (error) {
            console.error(`Error al enviar correo: ${error.message}`);
        }
    }
    async sendMailNotification(to, subject, text) {
        const mailOptions = {
            from: process.env.MAIL_USER,
            to,
            subject,
            text
        };
        try {
            await this.transporter.sendMail(mailOptions);
            console.log(`Notificación de turno enviada a: ${to}`);
        }
        catch (error) {
            console.error(`Error al enviar notificación de turno: ${error.message}`);
        }
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MailService);
//# sourceMappingURL=correos.service.js.map