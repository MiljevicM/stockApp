import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.scss'],
})
export class StockPageComponent implements OnInit {

  isShown: boolean = false;
  
  constructor() {}

  ngOnInit(): void {

  }

  openModal() {
    this.isShown = true;
  }

  clickedOutside(event: any) {
    if (event.target.className === '_modal') {
      this.isShown = false;
    }
  }

}
