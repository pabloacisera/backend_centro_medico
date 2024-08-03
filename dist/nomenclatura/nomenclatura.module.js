"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NomenclaturaModule = void 0;
const common_1 = require("@nestjs/common");
const nomenclatura_service_1 = require("./nomenclatura.service");
const nomenclatura_controller_1 = require("./nomenclatura.controller");
const prisma_service_service_1 = require("../prisma-service/prisma-service.service");
let NomenclaturaModule = class NomenclaturaModule {
};
exports.NomenclaturaModule = NomenclaturaModule;
exports.NomenclaturaModule = NomenclaturaModule = __decorate([
    (0, common_1.Module)({
        controllers: [nomenclatura_controller_1.NomenclaturaController],
        providers: [nomenclatura_service_1.NomenclaturaService, prisma_service_service_1.PrismaService],
    })
], NomenclaturaModule);
//# sourceMappingURL=nomenclatura.module.js.map