import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma-service/prisma-service.service';
export declare class AutenticacionPacienteService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateUser(email: string, dni: string): Promise<any>;
    logearPaciente(user: any): Promise<{
        access_token: string;
        data: any;
    }>;
}
