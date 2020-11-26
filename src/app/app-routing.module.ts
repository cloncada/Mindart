import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { PerfilArtistasComponent } from './perfil-artistas/perfil-artistas.component';
import { PerfilEmpresasComponent } from './perfil-empresas/perfil-empresas.component';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { InicioArtistasComponent } from './inicio-artistas/inicio-artistas.component';
import { InicioEmpresasComponent } from './inicio-empresas/inicio-empresas.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { EditarArtistaComponent } from './editar-artista/editar-artista.component';
import { PostempComponent } from './postemp/postemp.component';
import { PostartistaComponent } from './postartista/postartista/postartista.component';
import { ArtistaGuard} from './auth/guards/Artista.guard';
import { EmpresaGuard } from './auth/guards/Empresa.guard';
import { AdminGuard } from './auth/guards/Admin.guard';

const routes: Routes = [
//canActivate:[ArtistaGuard] SOLO DONDE PUEDEN ACCEDER LOS ARTISTAS
//canActivate:[AdminGuard] SOLO DONDE PUEDE ACCEDER EL ADMIN
//canActivate:[EmpresaGuard] SOLO DONDE PUEDEN ACCEDER LAS EMPRESAS

{path :'', redirectTo: '/artistas', pathMatch:'full'},
{path :'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
{path :'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
{path :"artistas", component: InicioComponent},
{path :"empresas", component: EmpresasComponent},
{path :"info", component:InfoComponent},
{path :"login-admin", component:LoginAdminComponent},
{path :"perfil-artistas", component:PerfilArtistasComponent,canActivate:[ArtistaGuard]},
{path :"perfil-empresas", component:PerfilEmpresasComponent,canActivate:[EmpresaGuard]},
{path :"inicio-admin", component:ArtistListComponent,canActivate:[AdminGuard]},
{path :"inicio-artistas", component:InicioArtistasComponent,canActivate:[ArtistaGuard]},
{path :"inicio-empresas", component:InicioEmpresasComponent,canActivate:[EmpresaGuard]},
{path :"admin-empresas", component:CompanyListComponent,canActivate:[AdminGuard]},
{path :"editar-artista", component:EditarArtistaComponent},
{path :"postemp/:id", component: PostempComponent,canActivate:[EmpresaGuard]},
{path :"postartista/:id", component: PostartistaComponent, canActivate:[ArtistaGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
