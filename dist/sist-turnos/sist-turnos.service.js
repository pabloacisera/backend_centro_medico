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
exports.SistTurnosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_service_1 = require("../prisma-service/prisma-service.service");
let SistTurnosService = class SistTurnosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async crearTurno(data) {
        const fecha = new Date(data.fecha);
        const fechaInicioDelDia = new Date(fecha.toISOString().split('T')[0] + 'T00:00:00.000Z');
        const fechaFinDelDia = new Date(fechaInicioDelDia.getTime() + 24 * 60 * 60 * 1000);
        const turnoExistente = await this.prisma.turno.findFirst({
            where: {
                fecha: fecha,
            },
        });
        if (turnoExistente) {
            return { mensaje: 'Turno no disponible', sugerencias: [] };
        }
        try {
            return await this.prisma.turno.create({
                data: {
                    fecha,
                    clienteId: data.clienteId,
                    userId: data.userId,
                },
            });
        }
        catch (error) {
            console.error('Error al crear el turno:', error);
            throw new common_1.InternalServerErrorException('Error al crear el turno');
        }
    }
    async obtenerTurnos() {
        return this.prisma.turno.findMany();
    }
    async obtenerTurnosPorUsuarioId(userId) {
        try {
            return await this.prisma.turno.findMany({
                where: { userId: userId },
            });
        }
        catch (error) {
            console.error('Error al obtener los turnos:', error);
            throw new common_1.InternalServerErrorException('No se ha podido obtener los turnos');
        }
    }
    remove(id) {
        return this.prisma.turno.delete({
            where: {
                id: id
            }
        });
    }
};
exports.SistTurnosService = SistTurnosService;
exports.SistTurnosService = SistTurnosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_service_1.PrismaService])
], SistTurnosService);
//# sourceMappingURL=sist-turnos.service.js.map