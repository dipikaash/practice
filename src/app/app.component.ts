import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dipika';
password: string;
count: number = 0;
@ViewChild(ChildComponent) cart: ChildComponent;
childStyle: string[];
showstyle: boolean= false;

  getData(pwd: string){
    this.count= this.count+ 1;
    if(this.count%2 != 0){
      this.password = pwd;
    }
    else{
      this.password = null;
    }
  }
  
 childDetails(){
  this.showstyle = !this.showstyle;
   this.childStyle = this.cart.detail;
 }
}
