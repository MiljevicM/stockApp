import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyModel } from 'src/app/shared/models/company/company.model';
import { CompaniesService } from 'src/app/shared/services/companies.service';

@Component({
  selector: 'app-companies-page',
  templateUrl: './companies-page.component.html',
  styles: [],
})
export class CompaniesPageComponent implements OnInit {

  isShown: boolean = false;
 

  isChecked = false;

  companies$!: Observable<CompanyModel[]>;

  constructor(private _companiesService: CompaniesService) { }

  ngOnInit(): void {
    this.initCompanies();
  }

  openModal() {
    this.isShown = true;
  }

  cancelModal() {
    this.isShown = false;
  }

  clickedOutside(event: any) {
    if (event.target.className === '_modal _modal--columns') {
      this.isShown = false;
    }
  }

  initCompanies(){
    this.companies$ = this._companiesService.getCompanies();
  }

}
