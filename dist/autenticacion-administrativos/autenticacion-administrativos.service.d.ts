import { CreateAutenticacionAdministrativoDto } from './dto/create-autenticacion-administrativo.dto';
import { UpdateAutenticacionAdministrativoDto } from './dto/update-autenticacion-administrativo.dto';
import { PrismaService } from 'src/prisma-service/prisma-service.service';
import { AuthenticatedUserResponse } from './autenticacion.interface';
export declare class AutenticacionAdministrativosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    authenticate(email: string, password: string): Promise<AuthenticatedUserResponse>;
    recuperarContraseña(data: {
        email: string;
        rol: string;
    }): Promise<{
        success: boolean;
        data: {
            id: number;
            rol: string;
            area: string;
            nombre: string;
            email: string;
            password: string;
        };
    }>;
    actualizarContraseña(id: number, nuevaContraseña: string): Promise<void>;
    create(createAutenticacionAdministrativoDto: CreateAutenticacionAdministrativoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAutenticacionAdministrativoDto: UpdateAutenticacionAdministrativoDto): string;
    remove(id: number): string;
}
