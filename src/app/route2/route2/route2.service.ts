import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Route2Service{
    constructor(private http: HttpClient){

    }

    getProducts(){
        return this.http.get('https://fakestoreapi.com/products')
    }

}