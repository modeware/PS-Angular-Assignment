import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Route3Component } from './route3/route3.component';
import {Route3RoutingModule} from './route3-routing.module';
import { TimerComponent } from './timer/timer.component';
import { SetTimerComponent } from './set-timer/set-timer.component';
import { TimeStampsComponent } from './time-stamps/time-stamps.component';
import { ClickLogsComponent } from './click-logs/click-logs.component';


@NgModule({
  declarations: [
    Route3Component,
    TimerComponent,
    SetTimerComponent,
    TimeStampsComponent,
    ClickLogsComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    Route3RoutingModule
  ]
})
export class Route3Module { }
