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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_service_1 = require("../prisma-service/prisma-service.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let UsuarioService = class UsuarioService {
    constructor(servicio, jwtService) {
        this.servicio = servicio;
        this.jwtService = jwtService;
        this.jwtSecret = process.env.JWT_SECRET || 'other key';
        if (!this.jwtSecret) {
            throw new Error('JWT_SECRET is not set in config.json');
        }
    }
    async create(usuario) {
        const datosDeUsuario = {
            rol: usuario.rol,
            area: usuario.area,
            nombre: usuario.nombre,
            email: usuario.email,
            password: await bcrypt.hash(usuario.password, 10),
        };
        const usuarioCreado = await this.servicio.usuario.create({
            data: datosDeUsuario,
        });
        const token = this.jwtService.sign({
            id: usuarioCreado.id,
            nombre: usuarioCreado.nombre,
            email: usuarioCreado.email,
        }, { secret: this.jwtSecret, expiresIn: '1d' });
        return { data: usuarioCreado, token };
    }
    async login(data) {
        const { email, password } = data;
        const usuarioEncontrado = await this.servicio.usuario.findUnique({
            where: { email: email },
        });
        if (!usuarioEncontrado) {
            throw new common_1.UnauthorizedException('Error en el proceso de logeo');
        }
        const verificarContraseña = await bcrypt.compare(password, usuarioEncontrado.password);
        if (!verificarContraseña) {
            throw new common_1.UnauthorizedException('Error en el proceso de logeo');
        }
        const token = this.jwtService.sign({
            id: usuarioEncontrado.id,
            nombre: usuarioEncontrado.nombre,
            email: usuarioEncontrado.email,
        }, { secret: this.jwtSecret, expiresIn: '1d' });
        return { data: usuarioEncontrado, token };
    }
    async loginAdministrativos(data) {
        const { email, password } = data;
        const usuarioEncontrado = await this.servicio.usuario.findUnique({
            where: { email: email },
        });
        if (!usuarioEncontrado) {
            throw new common_1.UnauthorizedException('Error en el proceso de logeo');
        }
        const verificarContraseña = await bcrypt.compare(password, usuarioEncontrado.password);
        if (!verificarContraseña) {
            throw new common_1.UnauthorizedException('Error en el proceso de logeo');
        }
        if (usuarioEncontrado.rol !== 'administrativo') {
            throw new common_1.UnauthorizedException('Acceso denegado. El usuario no tiene permisos administrativos.');
        }
        const token = this.jwtService.sign({
            id: usuarioEncontrado.id,
            nombre: usuarioEncontrado.nombre,
            email: usuarioEncontrado.email,
            rol: usuarioEncontrado.rol,
        }, { secret: this.jwtSecret, expiresIn: '1d' });
        return { data: usuarioEncontrado, token };
    }
    async recuperarContraseña(data) {
        const usuario = await this.servicio.usuario.findUnique({
            where: {
                email: data.email,
            }
        });
        if (!usuario) {
            throw new common_1.NotFoundException('Email no encontrado');
        }
        return { success: usuario.rol === 'profesional', data: usuario };
    }
    async actualizarContraseña(id, nuevaContraseña) {
        const usuario = await this.servicio.usuario.findUnique({
            where: { id: id },
        });
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        const hashedPassword = await bcrypt.hash(nuevaContraseña, 10);
        await this.servicio.usuario.update({
            where: { id: id },
            data: { password: hashedPassword },
        });
    }
    async findAll() {
        return await this.servicio.usuario.findMany({
            where: {
                rol: 'profesional'
            }
        });
    }
    async findAllExcept(userId) {
        return await this.servicio.usuario.findMany({
            where: {
                id: {
                    not: parseInt(userId)
                }
            }
        });
    }
    async FindAllForAdmin() {
        return await this.servicio.usuario.findMany();
    }
    async findOne(id) {
        const usuario = await this.servicio.usuario.findUnique({
            where: { id: id },
        });
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return usuario;
    }
    async update(id, updateUsuarioDto) {
        const usuario = await this.servicio.usuario.findUnique({
            where: { id: id },
        });
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return await this.servicio.usuario.update({
            where: { id: id },
            data: updateUsuarioDto,
        });
    }
    async remove(id) {
        const usuario = await this.servicio.usuario.findUnique({
            where: { id: id },
        });
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return await this.servicio.usuario.delete({
            where: { id: id },
        });
    }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_service_1.PrismaService, jwt_1.JwtService])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map