import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoverModel } from 'src/app/shared/models/cover/cover.model';
import { LabelModel } from 'src/app/shared/models/label/label.model';
import { OtherModel } from 'src/app/shared/models/other-packaging/other.model';
import { PackagingModel } from 'src/app/shared/models/packaging/packaging.model';
import { PackagingService } from 'src/app/shared/services/packaging.service';

@Component({
  selector: 'app-packaging-page',
  templateUrl: './packaging-page.component.html',
  styles: [],
})
export class PackagingPageComponent implements OnInit {
  menuLists = ['Packaging', 'Covers', 'Labels', 'Boxes', 'Other'];
  selectedList: any;

  isShown: boolean = false;

  packaging$!: Observable<PackagingModel[]>;
  covers$!: Observable<CoverModel[]>;
  labels$!: Observable<LabelModel[]>;
  boxes$!: Observable<LabelModel[]>;
  other$!: Observable<OtherModel[]>;
 
  constructor(private _packagingService: PackagingService) {}

  ngOnInit(): void {
    this.selectedList = this.menuLists[0];
    this.initPackaging();
    this.initCovers();
    this.initLabels();
    this.initBoxes();
    this.initOther();
  }

  openMenuList(menuList: any) {
    this.selectedList = menuList;
  }

  openModal() {
    this.isShown = true;
  }

  cancelModal() {
    this.isShown = false;
  }

  clickedOutside(event: any) {
    if (event.target.className === '_modal') {
      this.isShown = false;
    }
  }

  initPackaging(){
    this.packaging$ = this._packagingService.getPackaging();
  }

  initCovers(){
    this.covers$ = this._packagingService.getCovers();
  }

  initLabels(){
    this.labels$ = this._packagingService.getLabels();
  }

  initBoxes(){
    this.boxes$ = this._packagingService.getBoxes();
  }

  initOther(){
    this.other$ = this._packagingService.getOther();
  }
}
