import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { Route4Service } from '../route4.service';

@Component({
  selector: 'app-set-timer',
  templateUrl: './set-timer.component.html',
  styleUrls: ['./set-timer.component.css']
})
export class SetTimerComponent implements OnInit {
  currentTime: any;
  toggle: boolean = false;
  bundledValue: any;
  start: number = 0;
  paused: number = 0;

  constructor(private route4Service: Route4Service) { }

  ngOnInit(): void {
    this.route4Service.currentTimeDuration.subscribe((data: any)=> {
        console.log("Hello", data)  
        this.currentTime = data
        
        })
  }

  onSubmit(){
    this.toggle = !this.toggle;
    if(this.toggle){
      let date = new Date()
  
      this.start+=1;
      this.route4Service.emitClicks({started: this.start, paused: this.paused, date: 'Started at ' + date.toUTCString(), reset: false});
    }else{
      let date = new Date()
      this.paused+=1;
      this.route4Service.emitClicks({started: this.start, paused: this.paused, date: 'Paused at ' + date.toUTCString(), reset: false});
    }
    this.route4Service.emitTimeDuration({duration: this.currentTime, toggle: this.toggle, reset: false});
  }
  reset(){
      this.toggle = false;
      let date = new Date()
      this.route4Service.emitClicks({started: this.start, paused: this.paused, date: 'Reset at ' + date.toUTCString(), resetDate: date});
      this.route4Service.emitTimeDuration({duration: 0, toggle: false, reset: true});

  }

}
