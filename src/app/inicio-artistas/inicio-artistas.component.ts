import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {PostempService } from '../services/postemp.service';
import { MatDialog} from '@angular/material/dialog';
import { PostempI } from '../shared/models/postemp.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-inicio-artistas',
  templateUrl: './inicio-artistas.component.html',
  styleUrls: ['./inicio-artistas.component.css']
})
export class InicioArtistasComponent implements OnInit {

  public postsemp$: Observable<PostempI[]>;
  constructor(
    private app:AppComponent, 
    private postempSvc:PostempService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.app.FalseToolBar();
    this.postsemp$ = this.postempSvc.getAllPostemp();
  }

}
