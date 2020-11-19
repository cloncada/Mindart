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



const routes: Routes = [
{path : '', redirectTo: '/empresas', pathMatch:'full'},
{path : '', redirectTo: '/artistas', pathMatch:'full'},
{path :"artistas", component: InicioComponent},
{path :"empresas", component: EmpresasComponent},
{path :"info", component:InfoComponent},
{path :"login-admin", component:LoginAdminComponent},
{path :"perfil-artistas", component:PerfilArtistasComponent},
{path :"perfil-empresas", component:PerfilEmpresasComponent},
{path :"inicio-admin", component:ArtistListComponent},
{path :"inicio-artistas", component:InicioArtistasComponent},
{path :"inicio-empresas", component:InicioEmpresasComponent},
{path :"admin-empresas", component:CompanyListComponent},

{ path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
{ path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
{path:'',redirectTo:'/artistas',pathMatch:'full'},
{path:"editar-artista",component:EditarArtistaComponent},


{path :"postemp/:id", component: PostempComponent},
{path : "postartista/:id", component: PostartistaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
