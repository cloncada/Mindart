export type Roles = 'ARTISTA' | 'EMPRESA' | 'ADMIN';

export interface User{
    uid: string;
    email: string;
    password?: string;
    role?: Roles;
}