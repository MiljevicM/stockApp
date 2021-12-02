import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesPageComponent } from './pages/companies/companies-page.component';


@NgModule({
  declarations: [CompaniesPageComponent],
  imports: [
    CommonModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule { }
