import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from '../invoice/pages/invoice.component';
import { InvoicesPageComponent } from './pages/invoices-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: InvoicesPageComponent,
      },
      {
        path: ':id',
        component: InvoiceComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoicesRoutingModule {}
