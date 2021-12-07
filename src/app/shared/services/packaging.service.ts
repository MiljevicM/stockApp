import { CoverModel } from './../models/cover/cover.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PackagingModel } from '../models/packaging/packaging.model';
import { LabelModel } from '../models/label/label.model';
import { BoxModel } from '../models/box/box.model';
import { OtherModel } from '../models/other-packaging/other.model';

@Injectable({
  providedIn: 'root'
})
export class PackagingService {

  constructor() { }

  getPackaging(): Observable<PackagingModel[]> {
    //const url = `${this.resource}/invoices`;
    //return this.http.get<Membership[]>(url);
    return of(this.mockupGetPackaging());
  }

  getCovers(): Observable<CoverModel[]> {
    //const url = `${this.resource}/invoices`;
    //return this.http.get<Membership[]>(url);
    return of(this.mockupGetCovers());
  }

  getLabels(): Observable<LabelModel[]> {
    //const url = `${this.resource}/invoices`;
    //return this.http.get<Membership[]>(url);
    return of(this.mockupGetLabels());
  }

  getBoxes(): Observable<BoxModel[]> {
    //const url = `${this.resource}/invoices`;
    //return this.http.get<Membership[]>(url);
    return of(this.mockupGetBoxes());
  }

  getOther(): Observable<OtherModel[]> {
    //const url = `${this.resource}/invoices`;
    //return this.http.get<Membership[]>(url);
    return of(this.mockupGetOther());
  }

  // MOCKUP --------------------------------------------------------------

  private mockupGetPackaging(): PackagingModel[] {
    const ret: PackagingModel[] = [
      {
        id: 0,
        productName: 'Packaging1',
        counter: 500,
 
      },
      {
        id: 1,
        productName: 'Example2',
        counter: 2500,
      },
      {
      
        id: 2,
        productName: 'Example3',
        counter: 5600,
      },
      {
        id: 3,
        productName: 'Example4',
        counter: 45135,
      },
      {
        id: 4,
        productName: 'Example5',
        counter: 5125,
      },
      {
        id: 5,
        productName: 'Example6',
        counter: 100,
      },
      {
        id: 6,
        productName: 'Example7',
        counter: 2500,
      },

    ]

    return ret;
  }


  //------------------------------

  private mockupGetCovers(): CoverModel[] {
    const ret: CoverModel[] = [
      {
        id: 0,
        productName: 'Covers1',
        counter: 500,
 
      },
      {
        id: 1,
        productName: 'Example2',
        counter: 2500,
      },
      {
      
        id: 2,
        productName: 'Example3',
        counter: 5600,
      },
      {
        id: 3,
        productName: 'Example4',
        counter: 45135,
      },
      {
        id: 4,
        productName: 'Example5',
        counter: 5125,
      },
      {
        id: 5,
        productName: 'Example6',
        counter: 100,
      },
      {
        id: 6,
        productName: 'Example7',
        counter: 2500,
      },

    ]

    return ret;
  }

  //------------------------------

  private mockupGetLabels(): LabelModel[] {
    const ret: LabelModel[] = [
      {
        id: 0,
        productName: 'Labels1',
        counter: 500,
 
      },
      {
        id: 1,
        productName: 'Example2',
        counter: 2500,
      },
      {
      
        id: 2,
        productName: 'Example3',
        counter: 5600,
      },
      {
        id: 3,
        productName: 'Example4',
        counter: 45135,
      },
      {
        id: 4,
        productName: 'Example5',
        counter: 5125,
      },
      {
        id: 5,
        productName: 'Example6',
        counter: 100,
      },
      {
        id: 6,
        productName: 'Example7',
        counter: 2500,
      },

    ]

    return ret;
  }

   //------------------------------

   private mockupGetBoxes(): BoxModel[] {
    const ret: BoxModel[] = [
      {
        id: 0,
        productName: 'Boxes1',
        counter: 500,
 
      },
      {
        id: 1,
        productName: 'Example2',
        counter: 2500,
      },
      {
      
        id: 2,
        productName: 'Example3',
        counter: 5600,
      },
      {
        id: 3,
        productName: 'Example4',
        counter: 45135,
      },
      {
        id: 4,
        productName: 'Example5',
        counter: 5125,
      },
      {
        id: 5,
        productName: 'Example6',
        counter: 100,
      },
      {
        id: 6,
        productName: 'Example7',
        counter: 2500,
      },

    ]

    return ret;
  }

  //------------------------------

  private mockupGetOther(): BoxModel[] {
    const ret: BoxModel[] = [
      {
        id: 0,
        productName: 'Other1',
        counter: 500,
 
      },
      {
        id: 1,
        productName: 'Example2',
        counter: 2500,
      },
      {
      
        id: 2,
        productName: 'Example3',
        counter: 5600,
      },
      {
        id: 3,
        productName: 'Example4',
        counter: 45135,
      },
      {
        id: 4,
        productName: 'Example5',
        counter: 5125,
      },
      {
        id: 5,
        productName: 'Example6',
        counter: 100,
      },
      {
        id: 6,
        productName: 'Example7',
        counter: 2500,
      },

    ]

    return ret;
  }
}
