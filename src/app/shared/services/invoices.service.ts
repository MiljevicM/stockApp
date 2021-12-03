import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Test } from '../models/test.model';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  resource: any;

  constructor() { }

  getInvoices(): Observable<Test[]> {
    //const url = `${this.resource}/invoices`;
    //return this.http.get<Membership[]>(url);
    return of(this.mockupGetInvoices());
  }

  // MOCKUP --------------------------------------------------------------

  private mockupGetInvoices(): Test[] {
    const ret: Test[] = [
      {
        id: 0,
        name: 'Example1',
        date: '11.12.2021.',
      },
      {
        id: 1,
        name: 'Example2',
        date: '02.10.2021.',
      },
      {
        id: 2,
        name: 'Example3',
        date: '12.09.2021.',
      },
      {
        id: 3,
        name: 'Example4',
        date: '25.08.2021.',
      },
      {
        id: 4,
        name: 'Example4',
        date: '15.07.2021.',
      },
      {
        id: 5,
        name: 'Example5',
        date: '14.06.2021.',
      },
      {
        id: 6,
        name: 'Example6',
        date: '10.05.2021.',
      },

    ]

    return ret;
  }
  
}
