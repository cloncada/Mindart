import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { PerfilArtistasComponent } from './perfil-artistas/perfil-artistas.component';

const routes: Routes = [
{path :"inicio", component: InicioComponent},
{path :"empresas", component: EmpresasComponent},
{path :"info", component:InfoComponent},
{path :"login-admin", component:LoginAdminComponent},
{path :"perfil-artistas", component:PerfilArtistasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
