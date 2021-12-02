import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesPageComponent } from './pages/sales/sales-page.component';


@NgModule({
  declarations: [SalesPageComponent],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
