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
exports.ResultadoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_service_1 = require("../prisma-service/prisma-service.service");
let ResultadoService = class ResultadoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createManyResults(data) {
        try {
            return await this.prisma.resultado.createMany({
                data,
                skipDuplicates: true,
            });
        }
        catch (error) {
            throw new Error(`Error creating resultados: ${error.message}`);
        }
    }
    async findAll(clienteId) {
        try {
            const where = clienteId ? { clienteId } : {};
            return await this.prisma.resultado.findMany({ where });
        }
        catch (error) {
            console.error('Error fetching all resultados:', error);
            throw new Error(`Error al obtener todos los resultados: ${error.message}`);
        }
    }
    async findOne(id) {
        try {
            const resultado = await this.prisma.resultado.findUnique({
                where: { id },
            });
            if (!resultado) {
                throw new common_1.NotFoundException(`Resultado with ID ${id} not found.`);
            }
            return resultado;
        }
        catch (error) {
            console.error(`Error fetching resultado with ID ${id}:`, error);
            throw new Error(`Error al obtener el resultado: ${error.message}`);
        }
    }
    async update(id, updateResultadoDto) {
        try {
            const resultado = await this.prisma.resultado.update({
                where: { id },
                data: updateResultadoDto,
            });
            if (!resultado) {
                throw new common_1.NotFoundException(`Resultado with ID ${id} not found.`);
            }
            return resultado;
        }
        catch (error) {
            console.error(`Error updating resultado with ID ${id}:`, error);
            throw new Error(`Error al actualizar el resultado: ${error.message}`);
        }
    }
    async remove(id) {
        try {
            const resultado = await this.prisma.resultado.delete({ where: { id } });
            if (!resultado) {
                throw new common_1.NotFoundException(`Resultado with ID ${id} not found.`);
            }
            return resultado;
        }
        catch (error) {
            console.error(`Error deleting resultado with ID ${id}:`, error);
            throw new Error(`Error al eliminar el resultado: ${error.message}`);
        }
    }
};
exports.ResultadoService = ResultadoService;
exports.ResultadoService = ResultadoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_service_1.PrismaService])
], ResultadoService);
//# sourceMappingURL=resultado.service.js.map