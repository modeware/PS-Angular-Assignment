import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'route1', loadChildren: ()=>{return import('./route1/route1.module').then((m)=>m.Route1Module)}},
  {path:'route2', loadChildren: ()=>{return import('./route2/route2.module').then((m)=>m.Route2Module)}},
  {path:'route3', loadChildren: ()=>{return import('./route3/route3.module').then((m)=>m.Route3Module)}},
  {path:'route4', loadChildren: ()=>{return import('./route4/route4.module').then((m)=>m.Route4Module)}},
  {path:'route5', loadChildren: ()=>{return import('./route5/route5.module').then((m)=>m.Route5Module)}},
  {path:'route6', loadChildren: ()=>{return import('./route6/route6.module').then((m)=>m.Route6Module)}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
