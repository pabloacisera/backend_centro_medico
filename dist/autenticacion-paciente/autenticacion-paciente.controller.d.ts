import { AutenticacionPacienteService } from './autenticacion-paciente.service';
export declare class AutenticacionPacienteController {
    private readonly autenticacionPacienteService;
    private authService;
    constructor(autenticacionPacienteService: AutenticacionPacienteService, authService: AutenticacionPacienteService);
    logearPaciente(body: any): Promise<{
        access_token: string;
        data: any;
    }>;
}
