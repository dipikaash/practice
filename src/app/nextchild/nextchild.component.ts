import { Component, OnInit } from '@angular/core';
import { ShiftService } from '../shift.service';

@Component({
  selector: 'app-nextchild',
  templateUrl: './nextchild.component.html',
  styleUrls: ['./nextchild.component.css']
})
export class NextchildComponent implements OnInit {
  public text: string = "" ;
  public replyMessage = "Hello";
  constructor(private shiftService: ShiftService) { }

  ngOnInit(): void {
    this.shiftService.message$.subscribe((responce) => {
      if (this.text == null){
       this.text = responce;
       console.log(responce);
      }
      else {
        this.text = null;
      }
    });
  }
  reply(){
    this.shiftService.sendReply(this.replyMessage);
  }
}
