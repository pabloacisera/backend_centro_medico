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
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("./usuario.service");
const create_usuario_dto_1 = require("./dto/create-usuario.dto");
const update_usuario_dto_1 = require("./dto/update-usuario.dto");
const login_usuario_dto_1 = require("./dto/login-usuario.dto");
const reset_pass_1 = require("./dto/reset-pass");
let UsuarioController = class UsuarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    create(createUsuarioDto) {
        return this.usuarioService.create(createUsuarioDto);
    }
    logear(dtoLogeo) {
        return this.usuarioService.login(dtoLogeo);
    }
    logearAdmin(dtoLogeo) {
        return this.usuarioService.loginAdministrativos(dtoLogeo);
    }
    async resetPassword(data) {
        try {
            const result = await this.usuarioService.recuperarContraseña(data);
            return result;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error al procesar la solicitud');
        }
    }
    async updatePassword(id, password) {
        try {
            await this.usuarioService.actualizarContraseña(+id, password);
            return { success: true };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error al actualizar la contraseña');
        }
    }
    findAll() {
        return this.usuarioService.findAll();
    }
    findAllExcept(userId) {
        return this.usuarioService.findAllExcept(Number(userId));
    }
    findAllForAdmin() {
        return this.usuarioService.FindAllForAdmin();
    }
    findOne(id) {
        return this.usuarioService.findOne(+id);
    }
    update(id, updateUsuarioDto) {
        return this.usuarioService.update(+id, updateUsuarioDto);
    }
    remove(id) {
        return this.usuarioService.remove(+id);
    }
};
exports.UsuarioController = UsuarioController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_usuario_dto_1.CreateUsuarioDto]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('autenticacion'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_usuario_dto_1.Login]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "logear", null);
__decorate([
    (0, common_1.Post)('auth-admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_usuario_dto_1.Login]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "logearAdmin", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_pass_1.reset]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Patch)('update-password/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "updatePassword", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/agend/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "findAllExcept", null);
__decorate([
    (0, common_1.Get)('forAdmin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "findAllForAdmin", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_usuario_dto_1.UpdateUsuarioDto]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "remove", null);
exports.UsuarioController = UsuarioController = __decorate([
    (0, common_1.Controller)('usuario'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
//# sourceMappingURL=usuario.controller.js.map