import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route5Component } from './route5/route5.component';
import { Route5RoutingModule } from './route5-routing.module';


@NgModule({
  declarations: [
    Route5Component
  ],
  imports: [
    CommonModule, 
    Route5RoutingModule
  ]
})
export class Route5Module { }
