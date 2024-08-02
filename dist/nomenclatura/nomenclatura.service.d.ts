import { CreateNomenclaturaDto } from './dto/create-nomenclatura.dto';
import { PrismaService } from 'src/prisma-service/prisma-service.service';
export declare class NomenclaturaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<CreateNomenclaturaDto[]>;
    findByCodigo(codigo: number): Promise<{
        id: number;
        codigo: number;
        determinacion: string;
        unidadBase: number;
    }>;
}
