import { SistTurnosService } from './sist-turnos.service';
export declare class SistTurnosController {
    private readonly sistTurnosService;
    constructor(sistTurnosService: SistTurnosService);
    crearTurno(data: {
        fecha: string;
        clienteId: number;
        userId: number;
    }): Promise<{
        id: number;
        fecha: Date;
        clienteId: number;
        userId: number;
    } | {
        mensaje: string;
        sugerencias: any[];
    }>;
    obtenerTurnos(): Promise<{
        id: number;
        fecha: Date;
        clienteId: number;
        userId: number;
    }[]>;
    obtenerTurnosPorUserId(userId: number): Promise<{
        id: number;
        fecha: Date;
        clienteId: number;
        userId: number;
    }[]>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__TurnoClient<{
        id: number;
        fecha: Date;
        clienteId: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
