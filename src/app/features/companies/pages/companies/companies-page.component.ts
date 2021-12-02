import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies-page',
  templateUrl: './companies-page.component.html',
  styleUrls: ['./companies-page.component.scss']
})
export class CompaniesPageComponent implements OnInit {

  isShown: boolean = false;
 

  isChecked = false;

  constructor() { }

  ngOnInit(): void {
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

}
