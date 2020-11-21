import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginArtistasService } from '../../services/login-artistas.service';

@Component({
  selector: 'app-navbar-inicio-artista',
  templateUrl: './navbar-inicio-artista.component.html',
  styleUrls: ['./navbar-inicio-artista.component.css']
})
export class NavbarInicioArtistaComponent implements OnInit {
  artista: any;
  constructor(private router: Router, private authSvc: LoginArtistasService) { }

  ngOnInit(): void {
    this.artista = localStorage.getItem("artista");
    this.artista = JSON.parse(this.artista);
    console.log();
  }
  editarPerfil() {
    this.router.navigate(["editar-artista"]);
  }

  async onLogout() {
    try{
      this.authSvc.logout();
      this.router.navigate(['/artistas']);
    }catch(error){console.log(error)}
    
  }
}
