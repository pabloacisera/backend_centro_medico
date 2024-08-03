import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Login } from './dto/login-usuario.dto';
import { reset } from './dto/reset-pass';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<any>;
    logear(dtoLogeo: Login): Promise<any>;
    logearAdmin(dtoLogeo: Login): Promise<any>;
    resetPassword(data: reset): Promise<{
        success: boolean;
    }>;
    updatePassword(id: string, password: string): Promise<{
        success: boolean;
    }>;
    findAll(): Promise<any>;
    findAllExcept(userId: number): Promise<{
        id: number;
        rol: string;
        area: string;
        nombre: string;
        email: string;
        password: string;
    }[]>;
    findAllForAdmin(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<any>;
    remove(id: string): Promise<any>;
}
