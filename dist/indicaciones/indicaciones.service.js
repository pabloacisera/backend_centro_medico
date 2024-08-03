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
exports.IndicacionesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_service_1 = require("../prisma-service/prisma-service.service");
let IndicacionesService = class IndicacionesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createIndicacioneDto) {
        const { titulo, texto, userId } = createIndicacioneDto;
        try {
            return await this.prisma.indicacion.create({
                data: {
                    titulo,
                    texto,
                    userId,
                },
            });
        }
        catch (error) {
            console.error('Error al crear la indicación en el servicio:', error);
            throw new common_1.InternalServerErrorException('Error interno al crear la indicación');
        }
    }
    async findAll(userId) {
        return await this.prisma.indicacion.findMany({
            where: {
                userId,
            },
        });
    }
    async findOne(userId, id) {
        return await this.prisma.indicacion.findUnique({
            where: {
                id,
                userId,
            },
        });
    }
    async update(userId, id, updateIndicacioneDto) {
        const { titulo, texto } = updateIndicacioneDto;
        return await this.prisma.indicacion.update({
            where: {
                id,
                userId,
            },
            data: {
                titulo,
                texto,
            },
        });
    }
    async remove(userId, id) {
        return await this.prisma.indicacion.delete({
            where: {
                id,
                userId,
            },
        });
    }
};
exports.IndicacionesService = IndicacionesService;
exports.IndicacionesService = IndicacionesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_service_1.PrismaService])
], IndicacionesService);
//# sourceMappingURL=indicaciones.service.js.map