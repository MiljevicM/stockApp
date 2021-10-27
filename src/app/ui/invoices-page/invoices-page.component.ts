import { Component, OnInit } from '@angular/core';
import { DpDatePickerModule } from 'ng2-date-picker';

@Component({
  selector: 'app-invoices-page',
  templateUrl: './invoices-page.component.html',
  styleUrls: ['./invoices-page.component.scss'],
})
export class InvoicesPageComponent implements OnInit {

  isShown: boolean = false;

  isShown1: boolean = true;
  isShown2: boolean = false;
  isShown3: boolean = false;

  cities = [
    { value: 1, label: 'Vilnius' },
    { value: 2, label: 'Kaunas' },
    { value: 3, label: 'Pavilnys' },
  ];

  datePickerConfig: DpDatePickerModule = {
    format: 'MMM, YYYY',
  };

  constructor() {}

  ngOnInit(): void {}

  openModal() {
    this.isShown = true;
  }

  openModal1() {
    this.isShown3 = true;
  }

  cancelModal() {
    this.isShown = false;
  }

  cancelModal1() {
    this.isShown1 = false;
    this.isShown2 = true;
  }

  cancelModal2() {
    this.isShown3 = false;
  }

  clickedOutside(event: any) {
    if (event.target.className === '_modal') {
      this.isShown = false;
      this.isShown3 = false;
    }
  }
}
