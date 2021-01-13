import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor() { }
  private message = new Subject<string>();
  message$= this.message.asObservable();
  
  private reply = new Subject<string> ();
  reply$ = this.reply.asObservable();

  sendMessage(value: string){
   this.message.next(value);
  }
  
  sendReply (value: string){
    this.reply.next(value);
  }
}
