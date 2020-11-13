import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { NotificacionesComponent } from '../notificaciones/notificaciones.component';
import { PostempService } from '../services/postemp.service';
import { PostempI } from '../shared/models/postemp.interface';


@Component({
  selector: 'app-postemp',
  templateUrl: './postemp.component.html',
  styleUrls: ['./postemp.component.css']
})
export class PostempComponent implements OnInit {
  public postemp$ : Observable<PostempI>;

  constructor(private route: ActivatedRoute, private app:AppComponent, private postSvc: PostempService) { }

  ngOnInit(): void {
    this.app.FalseToolBar();
    const idPostemp = this.route.snapshot.params.id;
    //Llama al metodo que solo obtiene un post
    this.postemp$ = this.postSvc.getOnePost(idPostemp);
  
  }
  openInfo(){

  }

}
