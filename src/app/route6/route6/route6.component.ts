import { Component, OnInit, ViewChild, Renderer2, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.css']
})
export class Route6Component implements OnInit, AfterViewInit {
  @ViewChild('containerdiv') containerdiv: any;
  count:number = 1;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {

    for(let i =0; i < 3; i++){
      this.onWindowScroll()
    }
  }

  onWindowScroll(){
    console.log('hello')
    let count = this.count++;
    let div = this.renderer.createElement('div');
    let button = this.renderer.createElement('button')
    button.textContent = 'Button'
    div.appendChild(button)
    this.renderer.addClass(div, 'box')
    this.renderer.listen(button, 'click', ()=>{
      (function(){let c = count;
      alert(`Button in ${c}th div is clicked`)
    }())
    })

    this.containerdiv.nativeElement.appendChild(div)

  }
}
