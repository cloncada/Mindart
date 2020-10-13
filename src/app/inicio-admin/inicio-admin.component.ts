import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrls: ['./inicio-admin.component.css']
})
export class InicioAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  listarArtistas(){

    this.router.navigate(["lista-artistas"]);
  


  }
}
