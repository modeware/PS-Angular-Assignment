import { NgModule } from "@angular/core";
import { Route4Component } from './route4/route4.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path:'', component: Route4Component}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],  
})
export class Route4RoutingModule{

}