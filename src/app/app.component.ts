import { Component } from '@angular/core';
import { AppModule} from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';  
  change: boolean = true;

  constructor(){}

  ChangeToolBar(){
    this.change=false;
    console.log(this.change);
  }

  ngOnInit(): void {
  }

}
