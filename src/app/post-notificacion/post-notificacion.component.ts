import { Component, OnInit } from '@angular/core';
import { NotificacionService } from '../services/notificacion-service.service';
import { Observable } from 'rxjs';
import { PostnotiI } from '../shared/models/postnoti.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-notificacion',
  templateUrl: './post-notificacion.component.html',
  styleUrls: ['./post-notificacion.component.css']
})
export class PostNotificacionComponent implements OnInit {


  public postnoti$: Observable<PostnotiI[]>;
  private user:any;
 
  constructor(private postnotiSvc:NotificacionService,private route: ActivatedRoute,) { }

  ngOnInit(): void {
  
    this.user = JSON.parse(localStorage.getItem('empresa'));    
    this.postnotiSvc.creador = this.user.name,
    this.postnoti$= this.postnotiSvc.getAllPostNoti();
    console.log(this.user.name)
  }

}
