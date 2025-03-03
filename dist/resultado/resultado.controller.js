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
exports.ResultadoController = void 0;
const common_1 = require("@nestjs/common");
const resultado_service_1 = require("./resultado.service");
const client_1 = require("@prisma/client");
let ResultadoController = class ResultadoController {
    constructor(resultadoService) {
        this.resultadoService = resultadoService;
    }
    async createManyResultados(data) {
        try {
            return await this.resultadoService.createManyResults(data);
        }
        catch (error) {
            console.error('Error creating resultados:', error);
            throw new Error('Error al crear los resultados');
        }
    }
    findAll(clienteId) {
        return this.resultadoService.findAll(clienteId ? parseInt(clienteId, 10) : undefined);
    }
    findOne(id) {
        return this.resultadoService.findOne(+id);
    }
    update(id, updateResultadoDto) {
        return this.resultadoService.update(+id, updateResultadoDto);
    }
    remove(id) {
        return this.resultadoService.remove(+id);
    }
};
exports.ResultadoController = ResultadoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ResultadoController.prototype, "createManyResultados", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('clienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResultadoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResultadoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ResultadoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResultadoController.prototype, "remove", null);
exports.ResultadoController = ResultadoController = __decorate([
    (0, common_1.Controller)('resultado'),
    __metadata("design:paramtypes", [resultado_service_1.ResultadoService])
], ResultadoController);
//# sourceMappingURL=resultado.controller.js.map