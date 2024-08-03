import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma-service/prisma-service.service';
import { Login } from './dto/login-usuario.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UsuarioService {
    private readonly servicio;
    private readonly jwtService;
    private readonly jwtSecret;
    constructor(servicio: PrismaService, jwtService: JwtService);
    create(usuario: CreateUsuarioDto): Promise<any>;
    login(data: Login): Promise<any>;
    loginAdministrativos(data: Login): Promise<any>;
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
    findAll(): Promise<any>;
    findAllExcept(userId: number): Promise<{
        id: number;
        rol: string;
        area: string;
        nombre: string;
        email: string;
        password: string;
    }[]>;
    FindAllForAdmin(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<any>;
    remove(id: number): Promise<any>;
}
