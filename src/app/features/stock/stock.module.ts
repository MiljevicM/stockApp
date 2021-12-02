import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockPageComponent } from './pages/stock/stock-page.component';


@NgModule({
  declarations: [StockPageComponent],
  imports: [
    CommonModule,
    StockRoutingModule
  ]
})
export class StockModule { }
