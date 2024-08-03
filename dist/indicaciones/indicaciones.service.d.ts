import { CreateIndicacionDto } from './dto/create-indicacione.dto';
import { UpdateIndicacioneDto } from './dto/update-indicacione.dto';
import { PrismaService } from 'src/prisma-service/prisma-service.service';
export declare class IndicacionesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createIndicacioneDto: CreateIndicacionDto): Promise<{
        id: number;
        titulo: string;
        texto: string;
        userId: number;
    }>;
    findAll(userId: number): Promise<{
        id: number;
        titulo: string;
        texto: string;
        userId: number;
    }[]>;
    findOne(userId: number, id: number): Promise<{
        id: number;
        titulo: string;
        texto: string;
        userId: number;
    }>;
    update(userId: number, id: number, updateIndicacioneDto: UpdateIndicacioneDto): Promise<{
        id: number;
        titulo: string;
        texto: string;
        userId: number;
    }>;
    remove(userId: number, id: number): Promise<{
        id: number;
        titulo: string;
        texto: string;
        userId: number;
    }>;
}
