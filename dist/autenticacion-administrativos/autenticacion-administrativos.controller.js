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
exports.AutenticacionAdministrativosController = void 0;
const common_1 = require("@nestjs/common");
const autenticacion_administrativos_service_1 = require("./autenticacion-administrativos.service");
const create_autenticacion_administrativo_dto_1 = require("./dto/create-autenticacion-administrativo.dto");
const update_autenticacion_administrativo_dto_1 = require("./dto/update-autenticacion-administrativo.dto");
const reset_pass_1 = require("../usuario/dto/reset-pass");
let AutenticacionAdministrativosController = class AutenticacionAdministrativosController {
    constructor(autenticacionAdministrativosService) {
        this.autenticacionAdministrativosService = autenticacionAdministrativosService;
    }
    async login(body) {
        try {
            const usuario = await this.autenticacionAdministrativosService.authenticate(body.email, body.password);
            return usuario;
        }
        catch (error) {
            throw new common_1.UnauthorizedException(error.message);
        }
    }
    async resetPassword(data) {
        try {
            const result = await this.autenticacionAdministrativosService.recuperarContraseña(data);
            return result;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error al procesar la solicitud');
        }
    }
    async updatePassword(id, password) {
        try {
            await this.autenticacionAdministrativosService.actualizarContraseña(+id, password);
            return { success: true };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error al actualizar la contraseña');
        }
    }
    create(createAutenticacionAdministrativoDto) {
        return this.autenticacionAdministrativosService.create(createAutenticacionAdministrativoDto);
    }
    findAll() {
        return this.autenticacionAdministrativosService.findAll();
    }
    findOne(id) {
        return this.autenticacionAdministrativosService.findOne(+id);
    }
    update(id, updateAutenticacionAdministrativoDto) {
        return this.autenticacionAdministrativosService.update(+id, updateAutenticacionAdministrativoDto);
    }
    remove(id) {
        return this.autenticacionAdministrativosService.remove(+id);
    }
};
exports.AutenticacionAdministrativosController = AutenticacionAdministrativosController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AutenticacionAdministrativosController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_pass_1.reset]),
    __metadata("design:returntype", Promise)
], AutenticacionAdministrativosController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Patch)('update-password/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AutenticacionAdministrativosController.prototype, "updatePassword", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_autenticacion_administrativo_dto_1.CreateAutenticacionAdministrativoDto]),
    __metadata("design:returntype", void 0)
], AutenticacionAdministrativosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AutenticacionAdministrativosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AutenticacionAdministrativosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_autenticacion_administrativo_dto_1.UpdateAutenticacionAdministrativoDto]),
    __metadata("design:returntype", void 0)
], AutenticacionAdministrativosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AutenticacionAdministrativosController.prototype, "remove", null);
exports.AutenticacionAdministrativosController = AutenticacionAdministrativosController = __decorate([
    (0, common_1.Controller)('autenticacion-administrativos'),
    __metadata("design:paramtypes", [autenticacion_administrativos_service_1.AutenticacionAdministrativosService])
], AutenticacionAdministrativosController);
//# sourceMappingURL=autenticacion-administrativos.controller.js.map