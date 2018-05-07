import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private isShowCarusel = false;
  private clickedObject: any;

  constructor() { }

  ngOnInit() {
  }

  private showCarousel(object: any) {
    this.isShowCarusel = true;
    // this.clickedObject = object;
  }

  private onChanged() {
    this.isShowCarusel = false;
  }

}
