import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

 
  @Input() products: Array<any> = []

  constructor() { }

  ngOnInit(): void {
    console.log(this.products)
  }

}

