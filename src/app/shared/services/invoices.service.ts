import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InvoiceModel } from '../models/invoice/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  

  constructor() { }

  getInvoices(): Observable<InvoiceModel[]> {
    //const url = `${this.resource}/invoices`;
    //return this.http.get<Membership[]>(url);
    return of(this.mockupGetInvoices());
  }

  // MOCKUP --------------------------------------------------------------

  private mockupGetInvoices(): InvoiceModel[] {
    const ret: InvoiceModel[] = [
      {
        id: 0,
        companyName: 'Example1',
        date: new Date,
      },
      {
        id: 1,
        companyName: 'Example2',
        date: new Date,
      },
      {
        id: 2,
        companyName: 'Example3',
        date: new Date,
      },
      {
        id: 3,
        companyName: 'Example4',
        date: new Date,
      },
      {
        id: 4,
        companyName: 'Example4',
        date: new Date,
      },
      {
        id: 5,
        companyName: 'Example5',
        date: new Date,
      },
      {
        id: 6,
        companyName: 'Example6',
        date: new Date,
      },

    ]

    return ret;
  }
  
}
