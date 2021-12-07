
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StockModel} from 'src/app/shared/models/product-history/product-history.model';
import { ProductHistoryService } from 'src/app/shared/services/product-history.service';

@Component({
  selector: 'app-stock-page',
  templateUrl: './stock-page.component.html',
  styles: [],
})
export class StockPageComponent implements OnInit {

  isShown: boolean = false;
 

  isChecked = false;
  
  products$!: Observable<StockModel[]>;

  constructor( private _productHistoryService: ProductHistoryService ) {}

  ngOnInit(): void {
    this.initProducts();
  }

  openModal() {
    this.isShown = true;
  }

  cancelModal() {
    this.isShown = false;
  }

  clickedOutside(event: any) {
    if (event.target.className === '_modal _modal--columns') {
      this.isShown = false;
    }
  }

  initProducts(){
    this.products$ = this._productHistoryService.getProducts();
  }

}
