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
exports.UploadFileController = void 0;
const common_1 = require("@nestjs/common");
const upload_file_service_1 = require("./upload-file.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
let UploadFileController = class UploadFileController {
    constructor(uploadFileService) {
        this.uploadFileService = uploadFileService;
    }
    async uploadFile(clienteId, file) {
        const parsedClienteId = parseInt(clienteId, 10);
        if (isNaN(parsedClienteId)) {
            throw new common_1.BadRequestException('Invalid client ID');
        }
        return this.uploadFileService.saveFile(file, parsedClienteId);
    }
    async downloadFile(id, res) {
        const fileStream = await this.uploadFileService.downloadFile(+id);
        res.set({
            'Content-Disposition': `attachment; filename="archivo"`,
            'Content-Type': 'application/octet-stream',
        });
        fileStream.pipe(res);
    }
    async findAll(clienteId) {
        const clienteIdNumber = Number(clienteId);
        if (isNaN(clienteIdNumber)) {
            throw new common_1.BadRequestException('El ID del cliente debe ser un número válido');
        }
        return this.uploadFileService.findAllByClientId(clienteIdNumber);
    }
    async findOne(id) {
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            throw new common_1.BadRequestException('ID debe ser un número válido');
        }
        const file = await this.uploadFileService.findOne(parsedId);
        if (!file) {
            throw new common_1.NotFoundException(`Archivo con ID ${parsedId} no encontrado`);
        }
        return file;
    }
    async removeDocs(id) {
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            throw new common_1.BadRequestException('ID debe ser un número válido');
        }
        try {
            const response = await this.uploadFileService.removeDoc(parsedId);
            return { message: 'Archivo eliminado correctamente', data: response };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException('No se encuentra archivos con el id enviado');
            }
            throw new common_1.InternalServerErrorException('Error al eliminar el archivo');
        }
    }
};
exports.UploadFileController = UploadFileController;
__decorate([
    (0, common_1.Post)('/:clienteId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            },
        }),
    })),
    __param(0, (0, common_1.Param)('clienteId')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UploadFileController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)('download/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UploadFileController.prototype, "downloadFile", null);
__decorate([
    (0, common_1.Get)(':clienteId'),
    __param(0, (0, common_1.Param)('clienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UploadFileController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UploadFileController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UploadFileController.prototype, "removeDocs", null);
exports.UploadFileController = UploadFileController = __decorate([
    (0, common_1.Controller)('upload-file'),
    __metadata("design:paramtypes", [upload_file_service_1.UploadFileService])
], UploadFileController);
//# sourceMappingURL=upload-file.controller.js.map