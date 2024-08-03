"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const usuario_module_1 = require("./usuario/usuario.module");
const prisma_service_service_1 = require("./prisma-service/prisma-service.service");
const cliente_module_1 = require("./cliente/cliente.module");
const nomenclatura_module_1 = require("./nomenclatura/nomenclatura.module");
const resultado_module_1 = require("./resultado/resultado.module");
const indicaciones_module_1 = require("./indicaciones/indicaciones.module");
const autenticacion_paciente_module_1 = require("./autenticacion-paciente/autenticacion-paciente.module");
const autenticacion_administrativos_module_1 = require("./autenticacion-administrativos/autenticacion-administrativos.module");
const sist_turnos_module_1 = require("./sist-turnos/sist-turnos.module");
const config_1 = require("@nestjs/config");
const correos_module_1 = require("./correos-backend/correos.module");
const upload_file_module_1 = require("./upload-file/upload-file.module");
const imapflow_correos_module_1 = require("./imapflow-correos/imapflow-correos.module");
const notificacion_gateway_1 = require("./notificacion-socket/notificacion.gateway");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            usuario_module_1.UsuarioModule,
            cliente_module_1.ClienteModule,
            nomenclatura_module_1.NomenclaturaModule,
            resultado_module_1.ResultadoModule,
            indicaciones_module_1.IndicacionesModule,
            autenticacion_paciente_module_1.AutenticacionPacienteModule,
            autenticacion_administrativos_module_1.AutenticacionAdministrativosModule,
            sist_turnos_module_1.SistTurnosModule,
            correos_module_1.CorreosModule,
            upload_file_module_1.UploadFileModule,
            imapflow_correos_module_1.ImapflowCorreosModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_service_1.PrismaService, notificacion_gateway_1.NotificacionGateway],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map