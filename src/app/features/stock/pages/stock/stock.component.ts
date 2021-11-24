import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styleUrls: ['./stock-page.component.scss'],
})
export class StockPageComponent implements OnInit {

  isShown: boolean = false;
 

  isChecked = false;
  
  
  constructor() {}

  ngOnInit(): void {

  }

  openModal() {
    this.isShown = true;
  }

  cancelModal() {
    this.isShown = false;
  }

  clickedOutside(event: any) {
    if (event.target.className === '_modal') {
      this.isShown = false;
    }
  }


  onChanged($event: any) {
    this.isChecked = $event && $event.target && $event.target.checked;
    this.onChanged(this.isChecked);
  }

}
