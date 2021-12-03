import { Component, OnInit } from '@angular/core';
import { Route5Service } from './route5.service';
import { KeyValue } from '@angular/common';


@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.css']
})
export class Route5Component implements OnInit {
  userData:  Array<any> = [];
  originalUserOrder: Array<any> = [];
  headings: Array<any> = [];

  constructor(private route5Service: Route5Service) { }

  ngOnInit(): void {
    this.route5Service.getUsers().subscribe((res)=>{
      this.userData = res.slice();
      this.originalUserOrder = res.slice();
      this.headings = Object.keys(this.userData[0]).map(data=>{
        return {'headingName': data, count: 0}
      });
      console.log(this.headings)
    }, 
    
      (err)=>{
        alert('Something Went Wrong')
      })
  }

  
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

  sortTableData(type: string, index: number){
    console.log(type)
    switch(type){
      case 'Name':
        console.log('Hello')
        if(this.headings[index].count == 0)
          {
            this.userData = this.userData.sort((a, b)=> (a.Name) > (b.Name)  ? 1 : -1 )
            this.headings[index].count += 1
          }
        else if(this.headings[index].count == 1)
          {
            this.userData = this.userData.sort((a, b)=> (a.Name) < (b.Name)  ? 1 : -1 )
            this.headings[index].count += 1

          }
          else{
            this.headings[index].count = 0
            console.log("or", this.originalUserOrder)
            this.userData = this.originalUserOrder.slice();
            console.log("Heyy", this.userData)
          }
        
            // code block
        break;
      case 'Section':
        if(this.headings[index].count == 0)
        {
          this.userData = this.userData.sort((a, b)=> (a.Section) > (b.Section)  ? 1 : -1 )
          this.headings[index].count += 1
        }
      else if(this.headings[index].count == 1)
        {
          this.userData = this.userData.sort((a, b)=> (a.Section) < (b.Section)  ? 1 : -1 )
          this.headings[index].count += 1

        }
        else{
          this.headings[index].count = 0
          console.log("or", this.originalUserOrder)
          this.userData = this.originalUserOrder.slice();
          console.log("Heyy", this.userData)
        }
        // code block
        break;
      default:
        let key = this.headings[index].headingName
        if(this.headings[index].count == 0)
        {debugger;
          this.userData = this.userData.sort((a, b)=> (a[key]) - (b[key])  )
          this.headings[index].count += 1
        }
      else if(this.headings[index].count == 1)
        {
          this.userData = this.userData.sort((a, b)=> (b[key]) - (a[key]) )
          this.headings[index].count += 1

        }
        else{
          this.headings[index].count = 0
          console.log("or", this.originalUserOrder)
          this.userData = this.originalUserOrder.slice();
          console.log("Heyy", this.userData)
        }
        // code block
    }

  }


}
