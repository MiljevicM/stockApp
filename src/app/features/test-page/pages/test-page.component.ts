import { TestPageModel } from './../../../shared/models/test-page.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styles: []
})
export class TestPageComponent implements OnInit {

 //testPage!: TestPageModel;
 form!: FormGroup;


 categories: any[] = [
   {
     id: 1,
     name: "Example 1"
   },
   {
    id: 2,
    name: "Example 2"
  },
  {
    id: 3,
    name: "Example 3"
  },
  {
    id: 4,
    name: "Example 4"
  }
 ]

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  
  }

  initForm() {
    this.form = this._fb.group({
      id: [this.categories || 0],
      name: [this.categories || "", [Validators.required]],
    });
  
  }



/*
  initForm() {
    this.form = this._fb.group({
      id: [this.testPage.id || 0],
      firstName: [this.testPage.firstName || "", [Validators.required]],
      lastName: [this.testPage.lastName || "", [Validators.required]],
    });
  
  }
*/


}
