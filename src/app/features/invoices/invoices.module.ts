import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesPageComponent } from './pages/invoices-page.component';

import { OwlDateTimeModule } from 'ng-pick-datetime';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { InvoiceCreateComponent } from './blocks/invoice-create/invoice-create.component';

@NgModule({
  declarations: [InvoicesPageComponent, InvoiceCreateComponent],
  imports: [
    CommonModule,
    InvoicesRoutingModule,

    NgSelectModule,
    OwlDateTimeModule,
    FormsModule,
  ],
})
export class InvoicesModule {}
