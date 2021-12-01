import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-set-timer',
  templateUrl: './set-timer.component.html',
  styleUrls: ['./set-timer.component.css']
})
export class SetTimerComponent implements OnInit {
  @Output() timeDuration = new EventEmitter();
  @Output() clicks = new EventEmitter();
  @Input() currentTime: any;
  toggle: boolean = false;
  bundledValue: any;
  start: number = 0;
  paused: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.toggle = !this.toggle;
    if(this.toggle){
      let date = new Date()
  
      this.start+=1;
      this.clicks.emit({started: this.start, paused: this.paused, date: 'Started at ' + date.toUTCString(), reset: false});
    }else{
      let date = new Date()
      this.paused+=1;
      this.clicks.emit({started: this.start, paused: this.paused, date: 'Paused at ' + date.toUTCString(), reset: false});
    }
    this.timeDuration.emit({duration: this.currentTime, toggle: this.toggle, reset: false});
  }
  reset(){
      this.toggle = false;
      let date = new Date()
      this.clicks.emit({started: this.start, paused: this.paused, date: 'Reset at ' + date.toUTCString(), resetDate: date});
      this.timeDuration.emit({duration: 0, toggle: false, reset: true});

  }

}
