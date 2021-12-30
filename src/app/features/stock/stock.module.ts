import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockPageComponent } from './pages/stock/stock-page.component';
import { ProductCreateComponent } from './blocks/product-create/product-create.component';


@NgModule({
  declarations: [StockPageComponent, ProductCreateComponent],
  imports: [
    CommonModule,
    StockRoutingModule
  ]
})
export class StockModule { }
