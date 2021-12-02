import { Component, OnInit } from '@angular/core';
import { Route4Service } from '../route4.service';

@Component({
  selector: 'app-time-stamps',
  templateUrl: './time-stamps.component.html',
  styleUrls: ['./time-stamps.component.css']
})
export class TimeStampsComponent implements OnInit {
  timeStamp: Array<any> = []
  constructor(private route4Service: Route4Service) { }

  ngOnInit(): void {
    this.route4Service.clicks.subscribe((clickData)=>{
      this.timeStamp.push(clickData);
    })
  }
}
