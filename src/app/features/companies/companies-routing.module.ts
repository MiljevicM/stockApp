import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesPageComponent } from './pages/companies/companies-page.component';

const routes: Routes = [
  {
    path: '',
    component: CompaniesPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
