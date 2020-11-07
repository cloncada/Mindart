import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostartistaService} from '../../services/postartista.service';
import { PostartistaI } from '../postartista.interface';
import { FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-postartista',
  templateUrl: './postartista.component.html',
  styleUrls: ['./postartista.component.css']
})
export class PostartistaComponent implements OnInit {
public postartista$: Observable<PostartistaI>;
  constructor(private app: AppComponent,private route: ActivatedRoute, private postSvc: PostartistaService) { }

  ngOnInit(): void {
    this.app.FalseToolBar();
    
const idPostartista = this.route.snapshot.params.id;
this.postartista$ = this.postSvc.getOnePostartista(idPostartista);
  }
  openInfo(){
    
  }
}
