import { NgModule } from "@angular/core";
import { Route3Component } from './route3/route3.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path:'', component: Route3Component}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    
})
export class Route3RoutingModule{

}