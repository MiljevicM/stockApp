import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-page',
  templateUrl: './invoice-page.component.html',
  styleUrls: ['./invoice-page.component.scss']
})
export class InvoicePageComponent implements OnInit {
  isShown: boolean = false;

  constructor() { }

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

}
