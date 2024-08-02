import { ResultadoService } from './resultado.service';
import { Prisma } from '@prisma/client';
export declare class ResultadoController {
    private readonly resultadoService;
    constructor(resultadoService: ResultadoService);
    createManyResultados(data: Prisma.ResultadoCreateManyInput[]): Promise<Prisma.BatchPayload>;
    findAll(clienteId?: string): Promise<{
        id: number;
        codigo: number;
        determinacion: string;
        unidadBase: number;
        valorTotal: number;
        clienteId: number;
        resultado: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        codigo: number;
        determinacion: string;
        unidadBase: number;
        valorTotal: number;
        clienteId: number;
        resultado: number;
    }>;
    update(id: string, updateResultadoDto: Prisma.ResultadoUpdateInput): Promise<{
        id: number;
        codigo: number;
        determinacion: string;
        unidadBase: number;
        valorTotal: number;
        clienteId: number;
        resultado: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        codigo: number;
        determinacion: string;
        unidadBase: number;
        valorTotal: number;
        clienteId: number;
        resultado: number;
    }>;
}
