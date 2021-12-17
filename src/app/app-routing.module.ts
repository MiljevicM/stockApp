import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
    data: { title: 'Login'},
  },

  {
    path: 'invoices',
    loadChildren: () =>
      import('./features/invoices/invoices.module').then(
        (m) => m.InvoicesModule
      ),
    data: { title: 'Invoices'},
  },
  {
    path: 'invoice',
    loadChildren: () =>
      import('./features/invoice/invoice.module').then((m) => m.InvoiceModule),
    data: { title: 'Invoices'},
  },
  {
    path: 'stock',
    loadChildren: () =>
      import('./features/stock/stock.module').then((m) => m.StockModule),
    data: { title: 'Stock'},
  },
  {
    path: 'packaging',
    loadChildren: () =>
      import('./features/packaging/packaging.module').then(
        (m) => m.PackagingModule
      ),
    data: { title: 'Packaging'},
  },
  {
    path: 'sales',
    loadChildren: () =>
      import('./features/sales/sales.module').then((m) => m.SalesModule),
    data: { title: 'Sales'},
  },
  {
    path: 'companies',
    loadChildren: () =>
      import('./features/companies/companies.module').then(
        (m) => m.CompaniesModule
      ),
    data: { title: 'Companies'},
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./features/test-page/test-page.module').then(
        (m) => m.TestPageModule
      ),
    data: { title: 'Test'},
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
