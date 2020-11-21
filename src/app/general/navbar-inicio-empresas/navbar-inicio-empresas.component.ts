import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginArtistasService } from 'src/app/services/login-artistas.service';

@Component({
  selector: 'app-navbar-inicio-empresas',
  templateUrl: './navbar-inicio-empresas.component.html',
  styleUrls: ['./navbar-inicio-empresas.component.css']
})
export class NavbarInicioEmpresasComponent implements OnInit {
  artista:any;
  constructor(private router: Router, private authSvc: LoginArtistasService) { }

  ngOnInit(): void {
    this.artista=localStorage.getItem("artista");
    this.artista=JSON.parse(this.artista);
    console.log();
  }
  editarPerfil(){

    this.router.navigate(["editar-artista"]);

  }

  async onLogout() {
    try{
      this.authSvc.logout();
      this.router.navigate(['/empresas']);
    }catch(error){console.log(error)}
    
  }
}
