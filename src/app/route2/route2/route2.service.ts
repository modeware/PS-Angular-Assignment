import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable()
export class Route2Service{
    constructor(private http: HttpClient){

    }

    getProducts(){
        return this.http.get('https://fakestoreapi.com/products')
        .pipe(
            map((data:any)=>{
                let array1 = data.slice();
                let array2 = data.map((item: any)=>{
                   return {
                       ...item,
                       'price': item['price'] + 100,
                       'title': item['title'] + '--Premium Product'
                }
                });
                let concatArray = array1.concat(array2);
                return concatArray;

            })
        )
    }

}