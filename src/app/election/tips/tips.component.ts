import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {

  constructor() { }

  public up: boolean = true;
  public uttrakhand: boolean = false;
  public punjab: boolean = false;
  public goa: boolean = false;
  public year2017: boolean = true;
  public year2012: boolean = false;
  ngOnInit(): void {
  }
  click(name: string){

    if(name === 'up') {
      this.up = true;
      this.uttrakhand = false;
      this.punjab = false;
      this.goa = false;
      return;
    } 
    if(name === 'uttrakhand') {
      this.up = false;
      this.uttrakhand = true;
      this.punjab = false;
      this.goa = false;
      return;
    }
    if(name === 'punjab') {
      this.up = false;
      this.uttrakhand = false;
      this.punjab = true;
      this.goa = false;
      return;
    }
    if(name === 'goa') {
      this.up = false;
      this.uttrakhand = false;
      this.punjab = false;
      this.goa = true;
      return;
    }
  }
  switchData(name:string){
    if(name === "year2017") {
      this.year2017 = true;
      this.year2012 = false;
    }
    if(name === "year2012"){
      this.year2012 = true;
      this.year2017 = false;
    }
  }
}
