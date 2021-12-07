import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesModel } from 'src/app/shared/models/product-history/product-history.model';
import { ProductHistoryService } from 'src/app/shared/services/product-history.service';

@Component({
  selector: 'app-sales-page',
  templateUrl: './sales-page.component.html',
  styles: [],
})
export class SalesPageComponent implements OnInit {

  products$!: Observable<SalesModel[]>;

  constructor(private _productHistoryService: ProductHistoryService) { }

  ngOnInit(): void {
    this.initProducts();
  }

  initProducts(){
    this.products$ = this._productHistoryService.getSales();
  }

}
