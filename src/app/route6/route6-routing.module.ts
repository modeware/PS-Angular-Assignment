import { NgModule } from "@angular/core";
import { Route6Component } from './route6/route6.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path:'', component: Route6Component}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    
})
export class Route6RoutingModule{

}