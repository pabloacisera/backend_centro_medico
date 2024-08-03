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
exports.UploadFileService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_service_1 = require("../prisma-service/prisma-service.service");
const path_1 = require("path");
const fs_1 = require("fs");
let UploadFileService = class UploadFileService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async saveFile(file, clienteId) {
        return this.prisma.file.create({
            data: {
                filename: file.filename,
                path: file.path,
                mimeType: file.mimetype,
                size: file.size,
                cliente: {
                    connect: { id: clienteId },
                },
            },
        });
    }
    async findAllByClientId(clienteId) {
        return this.prisma.file.findMany({
            where: { clienteId },
        });
    }
    async downloadFile(id) {
        const file = await this.findOne(id);
        if (!file) {
            throw new common_1.NotFoundException(`Archivo con ID ${id} no encontrado`);
        }
        const filePath = (0, path_1.join)(process.cwd(), file.path);
        return (0, fs_1.createReadStream)(filePath);
    }
    async findOne(id) {
        const file = await this.prisma.file.findUnique({ where: { id } });
        if (!file)
            return null;
        return {
            id: file.id,
            filename: file.filename,
            path: file.path,
            mimeType: file.mimeType,
            size: file.size,
            createdAt: file.createdAt,
            clienteId: file.clienteId,
        };
    }
    async removeDoc(id) {
        const file = await this.prisma.file.findUnique({ where: { id } });
        if (!file) {
            throw new common_1.NotFoundException('Archivo no encontrado');
        }
        try {
            const filePath = (0, path_1.join)(process.cwd(), file.path);
            if ((0, fs_1.existsSync)(filePath)) {
                (0, fs_1.unlinkSync)(filePath);
            }
            else {
                console.warn(`El archivo ${filePath} no existe en el sistema de archivos`);
            }
            return await this.prisma.file.delete({
                where: { id }
            });
        }
        catch (error) {
            console.error('Error al eliminar el archivo:', error);
            throw new common_1.InternalServerErrorException('Error al eliminar el archivo');
        }
    }
};
exports.UploadFileService = UploadFileService;
exports.UploadFileService = UploadFileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_service_1.PrismaService])
], UploadFileService);
//# sourceMappingURL=upload-file.service.js.map