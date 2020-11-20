import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-inicio-empresas',
  templateUrl: './navbar-inicio-empresas.component.html',
  styleUrls: ['./navbar-inicio-empresas.component.css']
})
export class NavbarInicioEmpresasComponent implements OnInit {
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
