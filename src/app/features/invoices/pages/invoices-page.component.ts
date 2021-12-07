import { InvoicesService } from './../../../shared/services/invoices.service';
import { Component, OnInit } from '@angular/core';

import { OwlDateTimeIntl } from 'ng-pick-datetime';
import { InvoiceModel } from 'src/app/shared/models/invoice/invoice.model';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-invoices-page',
  templateUrl: './invoices-page.component.html',
  styles: []
})
export class InvoicesPageComponent implements OnInit {
  isShown: boolean = false;

  cities = [
    { value: 1, label: 'Vilnius' },
    { value: 2, label: 'Kaunas' },
    { value: 3, label: 'Pavilnys' },
  ];

  public dateFrom = '21/06/2019 22:22:45';

  
  //invoices!: InvoiceModel[];
  invoices$!: Observable<InvoiceModel[]>;

  constructor(
    private owlDateTimeIntl: OwlDateTimeIntl,
    private _invoiceService: InvoicesService
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

  ngOnInit(): void {
    this.initInvoices();

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


  /*
  initInvoices(){
    this._invoiceService.getInvoices().subscribe((res: any) => {
      console.log(res);
      this.invoices = res;
    })
  }
  */

  initInvoices(){
    this.invoices$ = this._invoiceService.getInvoices();
  }

}
