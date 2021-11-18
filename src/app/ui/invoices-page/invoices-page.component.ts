import { Component, OnInit } from '@angular/core';

import { OwlDateTimeIntl } from 'ng-pick-datetime';



@Component({
  selector: 'app-invoices-page',
  templateUrl: './invoices-page.component.html',
  styleUrls: ['./invoices-page.component.scss'],
})
export class InvoicesPageComponent implements OnInit {
  isShown: boolean = false;

  cities = [
    { value: 1, label: 'Vilnius' },
    { value: 2, label: 'Kaunas' },
    { value: 3, label: 'Pavilnys' },
  ];

  public dateFrom = '21/06/2019 22:22:45';

  constructor(
    private owlDateTimeIntl: OwlDateTimeIntl
  ) {
    this.loadBtnI18n();
  }

  public changeDate(e: any) {
    console.log(e.input.value);
  }

  public loadBtnI18n(): void {
    this.owlDateTimeIntl.setBtnLabel = 'Set';
    this.owlDateTimeIntl.cancelBtnLabel = 'Cancel';
  }

  ngOnInit(): void {}

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
