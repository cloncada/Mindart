import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
import { GeneralComponent } from './general/general.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { LoginEmpresasComponent } from './login-empresas/login-empresas.component';
import { SigninEmpresasComponent } from './signin-empresas/signin-empresas.component';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { from } from 'rxjs';
import { PerfilArtistasComponent } from './perfil-artistas/perfil-artistas.component';
import { PerfilEmpresasComponent } from './perfil-empresas/perfil-empresas.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { InicioArtistasComponent } from './inicio-artistas/inicio-artistas.component';
import { InicioEmpresasComponent } from './inicio-empresas/inicio-empresas.component';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { ArtistListComponent } from './artist-list/artist-list.component';
import { MatTableModule } from '@angular/material/table';
import { SubirArchivoComponent } from './subir-archivo/subir-archivo.component';
import { PostempComponent } from './postemp/postemp.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

//Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { PostEmpresasComponent } from './post-empresas/post-empresas.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NavbarComponent } from './general/navbar/navbar.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { NavbarEmpresasComponent } from './general/navbar-empresas/navbar-empresas.component';
import { NavbarInicioArtistaComponent } from './general/navbar-inicio-artista/navbar-inicio-artista.component';
import { EditarArtistaComponent } from './editar-artista/editar-artista.component';
import { NewPostartistaComponent } from './postartista/new-postartista/new-postartista.component';
//import { NewPostartistaModule } from './postartista/new-postartista/new-postartista.module';
import { PostartistaComponent } from './postartista/postartista/postartista.component';
//import { TableComponent } from './postartista/table/table.component';
import { ModalComponent } from './postartista/modal/modal.component';
import { PostNotificacionComponent } from './post-notificacion/post-notificacion.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { FeditArtistComponent } from './fedit-artist/fedit-artist.component';
import { FeditCompanyComponent } from './fedit-company/fedit-company.component';
import { NavbarInicioEmpresasComponent } from './general/navbar-inicio-empresas/navbar-inicio-empresas.component';
import { LoginArtistasService } from './services/login-artistas.service';
import { ArtistaGuard } from './auth/guards/Artista.guard';
import { AdminGuard } from './auth/guards/Admin.guard';
import { EmpresaGuard } from './auth/guards/Empresa.guard';






@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InfoComponent,
    GeneralComponent,
    LoginComponent,
    SigninComponent,
    EmpresasComponent,
    LoginEmpresasComponent,
    SigninEmpresasComponent,
    PerfilArtistasComponent,
    PerfilEmpresasComponent,
    LoginAdminComponent,
    InicioArtistasComponent,
    InicioEmpresasComponent,
    InicioAdminComponent,
    ArtistListComponent,
    SubirArchivoComponent,
    NavbarComponent,
    NavbarEmpresasComponent,
    NavbarInicioArtistaComponent,
    EditarArtistaComponent,
    PostempComponent,
    PostEmpresasComponent,
    NewPostartistaComponent,
    PostartistaComponent,
    //TableComponent,
    ModalComponent,
    PostNotificacionComponent,
    CompanyListComponent,

    FeditArtistComponent,

    FeditCompanyComponent,

    NavbarInicioEmpresasComponent,
    //NewPostartistaModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.configFirebase), //Inicializamos conexión a Firesbase
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    HttpClientModule,
    MatTableModule,
    AngularFireAuthModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatChipsModule,
    //NewPostartistaModule,
  ],
  providers:[LoginArtistasService, ArtistaGuard,AdminGuard,EmpresaGuard],
  entryComponents: [LoginComponent,SigninComponent,EmpresasComponent,PostEmpresasComponent, ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
