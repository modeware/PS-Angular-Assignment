import { Component, OnInit, Input } from '@angular/core';
import { Route4Service } from '../route4.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  currentTime: number = 0;
  timeInterval: any;

  constructor(private route4Service: Route4Service) { }

  ngOnInit(): void {
    this.route4Service.timeDuration.subscribe((data) => {this.getTimeDuration(data)})
  }

  getTimeDuration(time: any){
    
    if(time.toggle){
      this.currentTime = time.duration;
      this.timeInterval = setInterval(()=>{
                              this.currentTime = this.currentTime -1;
                            },1000)
    }
    else if(time.reset){
      this.currentTime = 0;
      this.route4Service.currentTime(time.duration);
      clearInterval(this.timeInterval)
    }
    else{ 
      this.route4Service.currentTime(this.currentTime);
      clearInterval(this.timeInterval)
    }
   
  }

}
