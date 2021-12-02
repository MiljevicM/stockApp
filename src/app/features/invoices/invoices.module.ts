import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesPageComponent } from './pages/invoices-page.component';

import { OwlDateTimeModule } from 'ng-pick-datetime';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InvoicesPageComponent],
  imports: [
    CommonModule,
    InvoicesRoutingModule,

    NgSelectModule,
    OwlDateTimeModule,
    FormsModule,
  ],
})
export class InvoicesModule {}
