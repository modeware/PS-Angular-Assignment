import { Component, OnInit } from '@angular/core';
import {Route2Service} from './route2.service';
import {Product} from '../products.model'

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component implements OnInit {
  gridView: boolean = true;
  products: Array<Product> = [];
  loading: boolean = false;
  error: boolean = false;

  constructor(private route2Service: Route2Service) { }

  ngOnInit(): void {
    this.loading = true;
    this.route2Service.getProducts()
      .subscribe((prod: any) => {
        this.products = this.orderAscending(prod)
        this.loading = false;;
      },
      
      (err)=>{
        this.loading = false
        this.error = true;
      }
      )
  }

  toggleView(value: boolean): void {
    this.gridView = value;
  }

  order(event: any) {
    if(event.target.value == 1){
      this.products = this.orderAscending(this.products)
    }
    else{ 
      this.products = this.orderDescending(this.products)
    }
  }

  orderAscending(products: Array<Product>){
    let sortP = products;
    sortP = sortP.sort((a, b)=> (a.price) - (b.price))

    return sortP
  }
  orderDescending(products: Array<Product>){
    let sortP = products;
    sortP = sortP.sort((a, b)=> (b.price) - (a.price))
    return sortP;
  }

}
