import { PrismaService } from 'src/prisma-service/prisma-service.service';
export declare class SistTurnosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    obtenerTurnos(): Promise<({
        Usuario: {
            id: number;
            rol: string;
            area: string;
            nombre: string;
            email: string;
            password: string;
        };
        Cliente: {
            id: number;
            protocolo: number;
            nombre: string;
            dni: string;
            nacimiento: Date;
            edad: number;
            direccion: string;
            localidad: string;
            telefono: string;
            email: string;
            seguridadSocial: string;
            obs: string | null;
            userId: number;
            createdAt: Date;
            presente: boolean;
        };
    } & {
        id: number;
        fecha: Date;
        clienteId: number;
        userId: number;
    })[]>;
    obtenerTurnosPorUsuarioId(userId: number): Promise<{
        id: number;
        fecha: Date;
        clienteId: number;
        userId: number;
    }[]>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__TurnoClient<{
        id: number;
        fecha: Date;
        clienteId: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
