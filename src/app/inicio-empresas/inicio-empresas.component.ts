import { Component, OnInit } from '@angular/core';
import { PostartistaI} from '../postartista/postartista.interface';
import { Observable } from 'rxjs';
import { PostartistaService} from '../services/postartista.service';

@Component({
  selector: 'app-inicio-empresas',
  templateUrl: './inicio-empresas.component.html',
  styleUrls: ['./inicio-empresas.component.css']
})
export class InicioEmpresasComponent implements OnInit {

  public postartista$: Observable<PostartistaI[]>;

  constructor(public postSvc:PostartistaService) { }

  ngOnInit(): void {
    this.postartista$= this.postSvc.getAllPosts();

  }

}
