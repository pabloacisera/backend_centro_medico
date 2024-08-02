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
exports.NomenclaturaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_service_1 = require("../prisma-service/prisma-service.service");
let NomenclaturaService = class NomenclaturaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.nomenclatura.findMany();
    }
    async findByCodigo(codigo) {
        const nomenclatura = await this.prisma.nomenclatura.findFirst({
            where: { codigo },
        });
        if (!nomenclatura) {
            throw new common_1.NotFoundException('Código inexistente');
        }
        return nomenclatura;
    }
};
exports.NomenclaturaService = NomenclaturaService;
exports.NomenclaturaService = NomenclaturaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_service_1.PrismaService])
], NomenclaturaService);
//# sourceMappingURL=nomenclatura.service.js.map