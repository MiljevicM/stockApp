import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packaging-page',
  templateUrl: './packaging-page.component.html',
  styleUrls: ['./packaging-page.component.scss'],
})
export class PackagingPageComponent implements OnInit {
  menuLists = ['Packaging', 'Covers', 'Labels', 'Boxes', 'Other'];
  selectedList: any;

  isShown: boolean = false;
 

  constructor() {}

  ngOnInit(): void {
    this.selectedList = this.menuLists[0];
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
}
