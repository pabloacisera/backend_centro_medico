import { PrismaService } from 'src/prisma-service/prisma-service.service';
import { Prisma, Resultado } from '@prisma/client';
export declare class ResultadoService {
    private prisma;
    constructor(prisma: PrismaService);
    createManyResults(data: Prisma.ResultadoCreateManyInput[]): Promise<Prisma.BatchPayload>;
    findAll(clienteId?: number): Promise<Resultado[]>;
    findOne(id: number): Promise<Resultado | null>;
    update(id: number, updateResultadoDto: Prisma.ResultadoUpdateInput): Promise<Resultado>;
    remove(id: number): Promise<Resultado>;
}
