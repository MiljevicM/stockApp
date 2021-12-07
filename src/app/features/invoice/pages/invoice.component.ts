import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-page',
  templateUrl: './invoice.component.html',
  styles: [],
})
export class InvoiceComponent implements OnInit {
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
