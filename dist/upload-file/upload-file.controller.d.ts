import { UploadFileService } from './upload-file.service';
import { Response } from 'express';
import { UploadFileDto } from './dto/create-upload-file.dto';
export declare class UploadFileController {
    private readonly uploadFileService;
    constructor(uploadFileService: UploadFileService);
    uploadFile(clienteId: string, file: Express.Multer.File): Promise<{
        id: number;
        filename: string;
        path: string;
        mimeType: string;
        size: number;
        createdAt: Date;
        clienteId: number;
    }>;
    downloadFile(id: string, res: Response): Promise<void>;
    findAll(clienteId: string): Promise<{
        id: number;
        filename: string;
        path: string;
        mimeType: string;
        size: number;
        createdAt: Date;
        clienteId: number;
    }[]>;
    findOne(id: string): Promise<UploadFileDto>;
    removeDocs(id: string): Promise<{
        message: string;
        data: {
            id: number;
            filename: string;
            path: string;
            mimeType: string;
            size: number;
            createdAt: Date;
            clienteId: number;
        };
    }>;
}
