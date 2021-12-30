import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesPageComponent } from './pages/companies/companies-page.component';
import { CompanyCreateComponent } from './blocks/company-create/company-create.component';


@NgModule({
  declarations: [CompaniesPageComponent, CompanyCreateComponent],
  imports: [
    CommonModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule { }
