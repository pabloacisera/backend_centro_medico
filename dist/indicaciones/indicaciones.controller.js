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
exports.IndicacionesController = void 0;
const common_1 = require("@nestjs/common");
const indicaciones_service_1 = require("./indicaciones.service");
const create_indicacione_dto_1 = require("./dto/create-indicacione.dto");
const update_indicacione_dto_1 = require("./dto/update-indicacione.dto");
let IndicacionesController = class IndicacionesController {
    constructor(indicacionesService) {
        this.indicacionesService = indicacionesService;
    }
    async create(createIndicacioneDto) {
        try {
            const indicacionCreada = await this.indicacionesService.create(createIndicacioneDto);
            return indicacionCreada;
        }
        catch (error) {
            console.error('Error al crear la indicación:', error);
            throw new common_1.InternalServerErrorException('Error interno al crear la indicación');
        }
    }
    findAll(userId) {
        return this.indicacionesService.findAll(userId);
    }
    findOne(userId, id) {
        return this.indicacionesService.findOne(userId, id);
    }
    update(userId, id, updateIndicacioneDto) {
        return this.indicacionesService.update(userId, id, updateIndicacioneDto);
    }
    async remove(userId, id) {
        try {
            await this.indicacionesService.remove(userId, id);
            return { message: `Indicación con ID ${id} eliminada correctamente.` };
        }
        catch (error) {
            console.error('Error al eliminar la indicación:', error);
            throw new common_1.HttpException('Error al eliminar la indicación', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.IndicacionesController = IndicacionesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_indicacione_dto_1.CreateIndicacionDto]),
    __metadata("design:returntype", Promise)
], IndicacionesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], IndicacionesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':userId/:id'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], IndicacionesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':userId/:id'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_indicacione_dto_1.UpdateIndicacioneDto]),
    __metadata("design:returntype", void 0)
], IndicacionesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':userId/:id'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], IndicacionesController.prototype, "remove", null);
exports.IndicacionesController = IndicacionesController = __decorate([
    (0, common_1.Controller)('indicaciones'),
    __metadata("design:paramtypes", [indicaciones_service_1.IndicacionesService])
], IndicacionesController);
//# sourceMappingURL=indicaciones.controller.js.map