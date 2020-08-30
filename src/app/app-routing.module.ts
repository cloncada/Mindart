import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
{path :"inicio", component: InicioComponent},
{path :"info", component:InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
