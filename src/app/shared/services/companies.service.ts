import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CompanyModel } from '../models/company/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor() { }

  getCompanies(): Observable<CompanyModel[]> {
    //const url = `${this.resource}/invoices`;
    //return this.http.get<Membership[]>(url);
    return of(this.mockupGetCompanies());
  }

  // MOCKUP --------------------------------------------------------------

  private mockupGetCompanies(): CompanyModel[] {
    const ret: CompanyModel[] = [
      {
        id: 0,
        companyName: 'Example1',
        address: 'Example street',
        city: 'Example city',
        postCode: 11230,
        pib: 456581156,
        companyNo: 165165162,
        bankNo: 15419815663,
        discount: 30,
      },
      {
        id: 1,
        companyName: 'Example2',
        address: 'Example street',
        city: 'Example city',
        postCode: 11230,
        pib: 456581156,
        companyNo: 165165162,
        bankNo: 15419815663,
        discount: 5,
      },
      {
        id: 2,
        companyName: 'Example3',
        address: 'Example street',
        city: 'Example city',
        postCode: 11230,
        pib: 456581156,
        companyNo: 165165162,
        bankNo: 15419815663,
        discount: 30,
      },
      {
        id: 3,
        companyName: 'Example4',
        address: 'Example street',
        city: 'Example city',
        postCode: 11230,
        pib: 456581156,
        companyNo: 165165162,
        bankNo: 15419815663,
        discount: 25,
      },
      {
        id: 4,
        companyName: 'Example5',
        address: 'Example street',
        city: 'Example city',
        postCode: 11230,
        pib: 456581156,
        companyNo: 165165162,
        bankNo: 15419815663,
        discount: 15,
      },
      {
        id: 5,
        companyName: 'Example6',
        address: 'Example street',
        city: 'Example city',
        postCode: 11230,
        pib: 456581156,
        companyNo: 165165162,
        bankNo: 15419815663,
        discount: 10,
      },
      {
        id: 6,
        companyName: 'Example7',
        address: 'Example street',
        city: 'Example city',
        postCode: 11230,
        pib: 456581156,
        companyNo: 165165162,
        bankNo: 15419815663,
        discount: 20,
      },

    ]

    return ret;
  }
}
