import { NgModule } from "@angular/core";
import { Route2Component } from './route2/route2.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path:'', component: Route2Component}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    
})
export class Route2RoutingModule{

}