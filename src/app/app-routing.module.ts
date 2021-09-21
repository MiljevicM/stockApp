import { PackagingPageComponent } from './ui/packaging-page/packaging-page.component';
import { SalesPageComponent } from './ui/sales-page/sales-page.component';
import { StockPageComponent } from './ui/stock-page/stock-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesPageComponent } from './ui/invoices-page/invoices-page.component';
import { LoginPageComponent } from './ui/login-page/login-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'invoices', component: InvoicesPageComponent },
  { path: 'stock', component: StockPageComponent },
  { path: 'packaging', component: PackagingPageComponent },
  { path: 'sales', component: SalesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
