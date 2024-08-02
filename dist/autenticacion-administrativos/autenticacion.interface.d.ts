export interface Usuario {
    id: number;
    rol: string;
    area: string;
    nombre: string;
    email: string;
    password: string;
}
export interface AuthenticatedUserResponse {
    user: Usuario;
}
