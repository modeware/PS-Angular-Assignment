import { NgModule } from "@angular/core";
import { Route1Component } from './route1/route1.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path:'', component: Route1Component}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    
})
export class Route1RoutingModule{

}