"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionAdministrativosModule = void 0;
const common_1 = require("@nestjs/common");
const autenticacion_administrativos_service_1 = require("./autenticacion-administrativos.service");
const autenticacion_administrativos_controller_1 = require("./autenticacion-administrativos.controller");
const prisma_service_service_1 = require("../prisma-service/prisma-service.service");
let AutenticacionAdministrativosModule = class AutenticacionAdministrativosModule {
};
exports.AutenticacionAdministrativosModule = AutenticacionAdministrativosModule;
exports.AutenticacionAdministrativosModule = AutenticacionAdministrativosModule = __decorate([
    (0, common_1.Module)({
        controllers: [autenticacion_administrativos_controller_1.AutenticacionAdministrativosController],
        providers: [autenticacion_administrativos_service_1.AutenticacionAdministrativosService, prisma_service_service_1.PrismaService],
    })
], AutenticacionAdministrativosModule);
//# sourceMappingURL=autenticacion-administrativos.module.js.map