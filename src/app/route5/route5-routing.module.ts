import { NgModule } from "@angular/core";
import { Route5Component } from './route5/route5.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path:'', component: Route5Component}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    
})
export class Route5RoutingModule{

}