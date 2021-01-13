import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShiftService } from '../shift.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private shiftService: ShiftService) { }
  
  ngOnInit(): void {
    
      this.shiftService.reply$.subscribe(res=> {
      this.gotReply= res;
      });
     
  }
@Input() username: string;
@Output() send: EventEmitter<string> = new EventEmitter<string>();
 data: string = "abcd1234";
detail: string[]=['background-color: cadetblue','padding: 50px','color: white'];
gotReply="";
sendData() {
 this.send.emit(this.data);
 }

 sendmessage(){
   this.shiftService.sendMessage('Hi there');
 }

}
