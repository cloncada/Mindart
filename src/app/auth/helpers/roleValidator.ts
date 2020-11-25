import { User } from '../../shared/models/user.interface';
export class RoleValidator{
    isArtista(user: User): boolean {
        return user.role === 'ARTISTA'
    }
    isEmpresa(user: User): boolean {
        return user.role === 'EMPRESA'
    }
    isAdmin(user: User): boolean {
        return user.role === 'ADMIN'
    }
}