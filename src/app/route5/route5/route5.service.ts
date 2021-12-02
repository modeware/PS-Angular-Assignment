import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class Route5Service{
    constructor(private http: HttpClient){
    
    }

    getUsers(){
       return  this.http.get('https://jsonplaceholder.typicode.com/users')
            .pipe(map((users: any)=>{
                let newUserArray = []
               newUserArray = users.map((data: any)=>{
               return { 
                'Name': data['name'],
                'Class': Math.floor(Math.random() * 10) + 1,
                'Section': String.fromCharCode(Math.floor(Math.random() * 25) + 65),
                'Math': Math.floor(Math.random() * (50)) + 50,
                'Science': Math.floor(Math.random() * 50) + 50,
                'Computer' : Math.floor(Math.random() * 50) + 50,
                'English' : Math.floor(Math.random() * 50) + 50,
                'Hindi' : Math.floor(Math.random() * 50) + 50,
             
               }

              
                
 
               } )     
               console.log(newUserArray) 
               return newUserArray;       
            }
            ))
    }

}
