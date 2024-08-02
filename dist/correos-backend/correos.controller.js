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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailController = void 0;
const common_1 = require("@nestjs/common");
const correos_service_1 = require("./correos.service");
const platform_express_1 = require("@nestjs/platform-express");
let MailController = class MailController {
    constructor(mailService) {
        this.mailService = mailService;
    }
    async sendMail(from, to, subject, text, file) {
        await this.mailService.sendMail(from, to, subject, text, file);
        return { message: 'Correo enviado!' };
    }
    async notificarTurno(to, clienteNombre, fechaTurno) {
        const subject = 'Recordatorio de Turno';
        const text = `Estimado/a ${clienteNombre},\n\nEste es un recordatorio de que tiene un turno programado para el ${fechaTurno}. Por favor, no falte.\n\nSaludos,\nSu Clínica`;
        await this.mailService.sendMailNotification(to, subject, text);
        return { message: 'Notificación de turno enviada!' };
    }
};
exports.MailController = MailController;
__decorate([
    (0, common_1.Post)('send'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)('from')),
    __param(1, (0, common_1.Body)('to')),
    __param(2, (0, common_1.Body)('subject')),
    __param(3, (0, common_1.Body)('text')),
    __param(4, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Object]),
    __metadata("design:returntype", Promise)
], MailController.prototype, "sendMail", null);
__decorate([
    (0, common_1.Post)('notificar-turno'),
    __param(0, (0, common_1.Body)('to')),
    __param(1, (0, common_1.Body)('clienteNombre')),
    __param(2, (0, common_1.Body)('fechaTurno')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], MailController.prototype, "notificarTurno", null);
exports.MailController = MailController = __decorate([
    (0, common_1.Controller)('mail'),
    __metadata("design:paramtypes", [correos_service_1.MailService])
], MailController);
//# sourceMappingURL=correos.controller.js.map