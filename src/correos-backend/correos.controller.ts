import { Controller, Post, Body, UseInterceptors, UploadedFile } from "@nestjs/common";
import { MailService } from "./correos.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('mail')
export class MailController {
    constructor(private readonly mailService: MailService) { }

    @Post('send')
    @UseInterceptors(FileInterceptor('file'))
    async sendMail(
        @Body('from') from: string,
        @Body('to') to: string,
        @Body('subject') subject: string,
        @Body('text') text: string,
        @UploadedFile() file: Express.Multer.File
    ) {
        await this.mailService.sendMail(from, to, subject, text, file);
        return { message: 'Correo enviado!' };
    }

    @Post('notificar-turno')
    async notificarTurno(
        @Body('clienteEmail') clienteEmail: string,
        @Body('clienteNombre') clienteNombre: string,
        @Body('profesionalNombre') profesionalNombre: string,
        @Body('fechaTurno') fechaTurno: string
    ) {
        const subject = 'Recordatorio de Turno';
        const text = `Estimado/a ${clienteNombre},\n\nEste es un correo automático para notificarle la adjudicación de un turno médico con el profesional ${profesionalNombre} para el día ${fechaTurno}. Aguardamos su presencia. No responda este correo.\n\nSin otro motivo, saluda atentamente,\nAdministración Centro Médico`;
        await this.mailService.sendMailNotification(clienteEmail, subject, text);
        return { message: 'Notificación de turno enviada!' };
    }
}
