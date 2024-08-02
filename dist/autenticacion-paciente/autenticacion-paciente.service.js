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
exports.AutenticacionPacienteService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_service_1 = require("../prisma-service/prisma-service.service");
let AutenticacionPacienteService = class AutenticacionPacienteService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async validateUser(email, dni) {
        const user = await this.prisma.cliente.findUnique({
            where: { email, dni },
        });
        if (user) {
            const { dni, ...result } = user;
            return result;
        }
        return null;
    }
    async logearPaciente(user) {
        const payload = { email: user.email, dni: user.dni };
        const accessToken = this.jwtService.sign(payload);
        return {
            access_token: accessToken,
            data: user,
        };
    }
};
exports.AutenticacionPacienteService = AutenticacionPacienteService;
exports.AutenticacionPacienteService = AutenticacionPacienteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_service_1.PrismaService,
        jwt_1.JwtService])
], AutenticacionPacienteService);
//# sourceMappingURL=autenticacion-paciente.service.js.map