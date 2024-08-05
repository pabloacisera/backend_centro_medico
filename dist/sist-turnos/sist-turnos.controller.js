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
exports.SistTurnosController = void 0;
const common_1 = require("@nestjs/common");
const sist_turnos_service_1 = require("./sist-turnos.service");
let SistTurnosController = class SistTurnosController {
    constructor(sistTurnosService) {
        this.sistTurnosService = sistTurnosService;
    }
    async crearTurno(data) {
        try {
            const turno = await this.sistTurnosService.crearTurno(data);
            return turno;
        }
        catch (error) {
            if (error.message === 'Turno no disponible') {
                throw new common_1.ConflictException({ mensaje: 'Turno no disponible', sugerencias: [] });
            }
            else {
                throw new common_1.InternalServerErrorException('Error al crear el turno');
            }
        }
    }
    obtenerTurnos() {
        return this.sistTurnosService.obtenerTurnos();
    }
    async obtenerTurnosPorUserId(userId) {
        return this.sistTurnosService.obtenerTurnosPorUsuarioId(Number(userId));
    }
    remove(id) {
        return this.sistTurnosService.remove(+id);
    }
};
exports.SistTurnosController = SistTurnosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SistTurnosController.prototype, "crearTurno", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SistTurnosController.prototype, "obtenerTurnos", null);
__decorate([
    (0, common_1.Get)(':userId/mis_turnos'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SistTurnosController.prototype, "obtenerTurnosPorUserId", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SistTurnosController.prototype, "remove", null);
exports.SistTurnosController = SistTurnosController = __decorate([
    (0, common_1.Controller)('sist-turnos'),
    __metadata("design:paramtypes", [sist_turnos_service_1.SistTurnosService])
], SistTurnosController);
//# sourceMappingURL=sist-turnos.controller.js.map