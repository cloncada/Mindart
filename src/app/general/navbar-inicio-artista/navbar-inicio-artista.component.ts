import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-inicio-artista',
  templateUrl: './navbar-inicio-artista.component.html',
  styleUrls: ['./navbar-inicio-artista.component.css']
})
export class NavbarInicioArtistaComponent implements OnInit {
artista:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.artista=localStorage.getItem("artista");
    this.artista=JSON.parse(this.artista);
    console.log();
  }
  editarPerfil(){

    this.router.navigate(["editar-artista"]);

  }
}
