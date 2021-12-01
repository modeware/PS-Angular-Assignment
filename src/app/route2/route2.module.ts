import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route2Component } from './route2/route2.component';
import {Route2RoutingModule} from './route2-routing.module'
import { Route2Service } from './route2/route2.service';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ListViewComponent } from './list-view/list-view.component';


@NgModule({
  declarations: [
    Route2Component,
    GridViewComponent,
    ListViewComponent
  ],
  imports: [
    CommonModule, 
    Route2RoutingModule
  ], 
  providers: [Route2Service]
})
export class Route2Module { }
