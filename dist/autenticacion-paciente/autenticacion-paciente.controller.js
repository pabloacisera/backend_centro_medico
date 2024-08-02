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
exports.AutenticacionPacienteController = void 0;
const common_1 = require("@nestjs/common");
const autenticacion_paciente_service_1 = require("./autenticacion-paciente.service");
let AutenticacionPacienteController = class AutenticacionPacienteController {
    constructor(autenticacionPacienteService, authService) {
        this.autenticacionPacienteService = autenticacionPacienteService;
        this.authService = authService;
    }
    async logearPaciente(body) {
        const { email, dni } = body;
        const user = await this.autenticacionPacienteService.validateUser(email, dni);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        return this.autenticacionPacienteService.logearPaciente(user);
    }
};
exports.AutenticacionPacienteController = AutenticacionPacienteController;
__decorate([
    (0, common_1.Post)('logear-paciente'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AutenticacionPacienteController.prototype, "logearPaciente", null);
exports.AutenticacionPacienteController = AutenticacionPacienteController = __decorate([
    (0, common_1.Controller)('autenticacion-paciente'),
    __metadata("design:paramtypes", [autenticacion_paciente_service_1.AutenticacionPacienteService,
        autenticacion_paciente_service_1.AutenticacionPacienteService])
], AutenticacionPacienteController);
//# sourceMappingURL=autenticacion-paciente.controller.js.map