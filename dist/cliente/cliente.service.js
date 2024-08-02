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
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_service_1 = require("../prisma-service/prisma-service.service");
let ClienteService = class ClienteService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createClienteDto) {
        try {
            const lastCliente = await this.prisma.cliente.findFirst({
                where: { userId: createClienteDto.userId },
                orderBy: { protocolo: 'desc' },
            });
            const protocolo = lastCliente ? lastCliente.protocolo + 1 : createClienteDto.protocolo;
            const cliente = await this.prisma.cliente.create({
                data: {
                    protocolo,
                    nombre: createClienteDto.nombre,
                    dni: createClienteDto.dni.toString(),
                    nacimiento: new Date(createClienteDto.nacimiento),
                    edad: createClienteDto.edad,
                    direccion: createClienteDto.direccion,
                    localidad: createClienteDto.localidad,
                    telefono: createClienteDto.telefono,
                    email: createClienteDto.email,
                    seguridadSocial: createClienteDto.seguridadSocial,
                    obs: createClienteDto.obs,
                    userId: createClienteDto.userId,
                },
            });
            return cliente;
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException('Error al crear cliente');
        }
    }
    async findAll(userId) {
        return this.prisma.cliente.findMany({
            where: { userId },
        });
    }
    async findAllformAdmin() {
        return this.prisma.cliente.findMany();
    }
    async getClientsByIds(ids) {
        return this.prisma.cliente.findMany({
            where: {
                id: {
                    in: ids,
                },
            },
        });
    }
    async update(id, updateClienteDto, userId) {
        try {
            return this.prisma.cliente.update({
                where: { id, userId },
                data: {
                    nombre: updateClienteDto.nombre,
                    dni: updateClienteDto.dni.toString(),
                    nacimiento: new Date(updateClienteDto.nacimiento),
                    edad: updateClienteDto.edad,
                    direccion: updateClienteDto.direccion,
                    localidad: updateClienteDto.localidad,
                    telefono: updateClienteDto.telefono,
                    email: updateClienteDto.email,
                    seguridadSocial: updateClienteDto.seguridadSocial,
                    obs: updateClienteDto.obs,
                },
            });
        }
        catch (error) {
            console.log(error);
            throw new Error('Error al actualizar cliente');
        }
    }
    async remove(id, userId) {
        try {
            return this.prisma.cliente.delete({
                where: { id, userId },
            });
        }
        catch (error) {
            console.log(error);
            throw new Error('Error al eliminar cliente');
        }
    }
};
exports.ClienteService = ClienteService;
exports.ClienteService = ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_service_1.PrismaService])
], ClienteService);
//# sourceMappingURL=cliente.service.js.map