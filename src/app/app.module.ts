import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { NextchildComponent } from './nextchild/nextchild.component';
import {ShiftService} from 'src/app/shift.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    NextchildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShiftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
