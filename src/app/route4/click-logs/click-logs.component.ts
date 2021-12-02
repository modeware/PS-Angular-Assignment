import { Component, OnInit, Input } from '@angular/core';
import { Route4Service } from '../route4.service';

@Component({
  selector: 'app-click-logs',
  templateUrl: './click-logs.component.html',
  styleUrls: ['./click-logs.component.css']
})
export class ClickLogsComponent implements OnInit {
  clickData!: any;

  constructor(private route4Service: Route4Service) { }

  ngOnInit(): void {
    this.route4Service.clicks.subscribe(data =>{
        this.clickData = data
    })
  }

}
