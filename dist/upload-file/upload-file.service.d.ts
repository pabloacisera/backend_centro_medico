import { PrismaService } from 'src/prisma-service/prisma-service.service';
import { UploadFileDto } from './dto/create-upload-file.dto';
export declare class UploadFileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    saveFile(file: Express.Multer.File, clienteId: number): Promise<{
        id: number;
        filename: string;
        path: string;
        mimeType: string;
        size: number;
        createdAt: Date;
        clienteId: number;
    }>;
    findAllByClientId(clienteId: number): Promise<{
        id: number;
        filename: string;
        path: string;
        mimeType: string;
        size: number;
        createdAt: Date;
        clienteId: number;
    }[]>;
    downloadFile(id: number): Promise<import("fs").ReadStream>;
    findOne(id: number): Promise<UploadFileDto | null>;
    removeDoc(id: number): Promise<{
        id: number;
        filename: string;
        path: string;
        mimeType: string;
        size: number;
        createdAt: Date;
        clienteId: number;
    }>;
}
