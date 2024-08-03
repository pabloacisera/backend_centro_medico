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
exports.AutenticacionAdministrativosService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const prisma_service_service_1 = require("../prisma-service/prisma-service.service");
let AutenticacionAdministrativosService = class AutenticacionAdministrativosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async authenticate(email, password) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { email },
        });
        if (!usuario) {
            throw new common_1.UnauthorizedException('Email o contraseña incorrectos.');
        }
        if (usuario.rol !== 'administrativo') {
            throw new common_1.UnauthorizedException('El usuario no tiene el rol adecuado.');
        }
        const isMatch = await bcrypt.compare(password, usuario.password);
        if (!isMatch) {
            throw new common_1.UnauthorizedException('Email o contraseña incorrectos.');
        }
        return { user: usuario };
    }
    async recuperarContraseña(data) {
        const usuario = await this.prisma.usuario.findUnique({
            where: {
                email: data.email,
            }
        });
        if (!usuario) {
            throw new common_1.NotFoundException('Email no encontrado');
        }
        return { success: usuario.rol === 'administrativo', data: usuario };
    }
    async actualizarContraseña(id, nuevaContraseña) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { id: id },
        });
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        const hashedPassword = await bcrypt.hash(nuevaContraseña, 10);
        await this.prisma.usuario.update({
            where: { id: id },
            data: { password: hashedPassword },
        });
    }
    create(createAutenticacionAdministrativoDto) {
        return 'This action adds a new autenticacionAdministrativo';
    }
    findAll() {
        return `This action returns all autenticacionAdministrativos`;
    }
    findOne(id) {
        return `This action returns a #${id} autenticacionAdministrativo`;
    }
    update(id, updateAutenticacionAdministrativoDto) {
        return `This action updates a #${id} autenticacionAdministrativo`;
    }
    remove(id) {
        return `This action removes a #${id} autenticacionAdministrativo`;
    }
};
exports.AutenticacionAdministrativosService = AutenticacionAdministrativosService;
exports.AutenticacionAdministrativosService = AutenticacionAdministrativosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_service_1.PrismaService])
], AutenticacionAdministrativosService);
//# sourceMappingURL=autenticacion-administrativos.service.js.map