import { AutenticacionAdministrativosService } from './autenticacion-administrativos.service';
import { CreateAutenticacionAdministrativoDto } from './dto/create-autenticacion-administrativo.dto';
import { UpdateAutenticacionAdministrativoDto } from './dto/update-autenticacion-administrativo.dto';
import { reset } from 'src/usuario/dto/reset-pass';
export declare class AutenticacionAdministrativosController {
    private readonly autenticacionAdministrativosService;
    constructor(autenticacionAdministrativosService: AutenticacionAdministrativosService);
    login(body: {
        email: string;
        password: string;
    }): Promise<import("./autenticacion.interface").AuthenticatedUserResponse>;
    resetPassword(data: reset): Promise<{
        success: boolean;
    }>;
    updatePassword(id: string, password: string): Promise<{
        success: boolean;
    }>;
    create(createAutenticacionAdministrativoDto: CreateAutenticacionAdministrativoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAutenticacionAdministrativoDto: UpdateAutenticacionAdministrativoDto): string;
    remove(id: string): string;
}
