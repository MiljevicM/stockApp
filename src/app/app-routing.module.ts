import { InvoicePageComponent } from './ui/invoice-page/invoice-page.component';
import { CompaniesPageComponent } from './ui/companies-page/companies-page.component';
import { PackagingPageComponent } from './ui/packaging-page/packaging-page.component';
import { SalesPageComponent } from './ui/sales-page/sales-page.component';
import { StockPageComponent } from './ui/stock-page/stock-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesPageComponent } from './ui/invoices-page/invoices-page.component';
import { LoginPageComponent } from './ui/login-page/login-page.component';

/*
const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'invoices', component: InvoicesPageComponent },
  { path: 'invoice', component: InvoicePageComponent},
  { path: 'stock', component: StockPageComponent },
  { path: 'packaging', component: PackagingPageComponent },
  { path: 'sales', component: SalesPageComponent },
  { path: 'companies', component: CompaniesPageComponent }
];

*/

const routes: Routes = [
  {
    path: 'invoices',
    component: InvoicesPageComponent,
    data: {
      header: true,
    },
  },
  {
    path: 'invoice',
    component: InvoicePageComponent,
    data: {
      header: true,
    },
  },
  {
    path: 'stock',
    component: StockPageComponent,
    data: {
      header: true,
    },
  },
  {
    path: 'packaging',
    component: PackagingPageComponent,
    data: {
      header: true,
    },
  },
  {
    path: 'sales',
    component: SalesPageComponent,
    data: {
      header: true,
    },
  },
  {
    path: 'companies',
    component: CompaniesPageComponent,
    data: {
      header: true,
    },
  },
  {
    path: 'login',
    component: LoginPageComponent,
    data: {
      header: false,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
