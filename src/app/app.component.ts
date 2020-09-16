import { Component } from '@angular/core';
import { AppModule} from './app.module';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';  
  change: boolean = true;

  constructor(private cdRef:ChangeDetectorRef){}

  TrueToolBar(){
    this.change=true;
    console.log(this.change);
  }

  ngOnInit(): void {
  }

  FalseToolBar(){
    this.change=false;
    console.log(this.change);
    this.cdRef.detectChanges();
  }
}
