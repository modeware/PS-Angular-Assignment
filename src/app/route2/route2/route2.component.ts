import { Component, OnInit } from '@angular/core';
import {Route2Service} from './route2.service';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component implements OnInit {
  gridView: boolean = true;
  products: Array<any> = [];

  constructor(private route2Service: Route2Service) { }

  ngOnInit(): void {
    this.route2Service.getProducts()
      .subscribe((prod: any) => {
        this.products = this.orderAscending(prod)
      })
  }

  toggleView(){
    this.gridView = !this.gridView;
  }

  order(event: any) {
    debugger;
    if(event.target.value == 1){
      this.products = this.orderAscending(this.products)
    }
    else{ 
      this.products = this.orderDescending(this.products)
    }
  }

  orderAscending(products: Array<any>){
    let sortP = products;
    sortP = sortP.sort((a, b)=> parseInt(a.price) - parseInt(b.price))

    return sortP
  }
  orderDescending(products: Array<any>){
    let sortP = products;
    sortP = sortP.sort((a, b)=> parseInt(b.price) - parseInt(a.price))
    return sortP;
  }

}
