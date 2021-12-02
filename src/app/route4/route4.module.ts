import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Route4Component } from './route4/route4.component';
import {Route4RoutingModule} from './route4-routing.module'
import {ClickLogsComponent} from './click-logs/click-logs.component';
import {SetTimerComponent} from './set-timer/set-timer.component';
import {TimeStampsComponent} from './time-stamps/time-stamps.component';
import {TimerComponent} from './timer/timer.component';

@NgModule({
  declarations: [
    Route4Component, 
    ClickLogsComponent,
    SetTimerComponent,
    TimeStampsComponent,
    TimerComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    Route4RoutingModule
  ]
})
export class Route4Module { }
