import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-click-logs',
  templateUrl: './click-logs.component.html',
  styleUrls: ['./click-logs.component.css']
})
export class ClickLogsComponent implements OnInit {
  @Input() clickData!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
