import { NomenclaturaService } from './nomenclatura.service';
export declare class NomenclaturaController {
    private readonly nomenclaturaService;
    constructor(nomenclaturaService: NomenclaturaService);
    findAll(): Promise<import("./dto/create-nomenclatura.dto").CreateNomenclaturaDto[]>;
    findByCodigo(codigo: number): Promise<{
        id: number;
        codigo: number;
        determinacion: string;
        unidadBase: number;
    }>;
}
