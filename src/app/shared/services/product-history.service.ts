import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SalesModel, StockModel } from '../models/product-history/product-history.model';

@Injectable({
  providedIn: 'root'
})
export class ProductHistoryService {

  constructor() { }

  getProducts(): Observable<StockModel[]> {
    //const url = `${this.resource}/invoices`;
    //return this.http.get<Membership[]>(url);
    return of(this.mockupGetProducts());
  }

  getSales(): Observable<SalesModel[]> {
    //const url = `${this.resource}/invoices`;
    //return this.http.get<Membership[]>(url);
    return of(this.mockupGetSales());
  }

  // MOCKUP --------------------------------------------------------------

  private mockupGetProducts(): StockModel[] {
    const ret: StockModel[] = [
      {
        id: 0,
        productName: 'Example1',
        inStock: 1500,
      },
      {
        id: 1,
        productName: 'Example2',
        inStock: 400,
      },
      {
        id: 2,
        productName: 'Example3',
        inStock: 6500,
      },
      {
        id: 3,
        productName: 'Example4',
        inStock: 100,
      },
      {
        id: 4,
        productName: 'Example5',
        inStock: 4700,
      },
      {
        id: 5,
        productName: 'Example6',
        inStock: 2500,
      },
      {
        id: 6,
        productName: 'Example7',
        inStock: 500,
      },

    ]

    return ret;
  }

  // MOCKUP --------------------------------------------------------------

  private mockupGetSales(): SalesModel[] {
    const ret: SalesModel[] = [
      {
        id: 0,
        productName: 'Example1',
        date: new Date,
        produced: 1000,
        sold: 500,
      },
      {
        id: 1,
        productName: 'Example2',
        date: new Date,
        produced: 1000,
        sold: 500,
      },
      {
        id: 2,
        productName: 'Example3',
        date: new Date,
        produced: 1000,
        sold: 500,
      },
      {
        id: 3,
        productName: 'Example4',
        date: new Date,
        produced: 1000,
        sold: 500,
      },
      {
        id: 4,
        productName: 'Example5',
        date: new Date,
        produced: 1000,
        sold: 500,
      },
      {
        id: 5,
        productName: 'Example6',
        date: new Date,
        produced: 1000,
        sold: 500,
      },
      {
        id: 6,
        productName: 'Example7',
        date: new Date,
        produced: 1000,
        sold: 500,
      },

    ]

    return ret;
  }
}
