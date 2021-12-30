import { TestPageModel } from './../../../shared/models/test-page.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styles: []
})
export class TestPageComponent implements OnInit {

  form!: FormGroup;
  resultForm!: TestPageModel;
 
 
  types: any[] = [
    {
      id: 1,
      name: "Admin"
    },
    {
     id: 2,
     name: "Supplier"
   },
   {
     id: 3,
     name: "User"
   }
  ]
 
   constructor(private _fb: FormBuilder) { }
 
   ngOnInit(): void {
     this.initForm();
   
   }
 
   initForm() {
     this.form = this._fb.group({
       id: [0, []],
       firstName: [null, [Validators.required]],
       lastName: [null, [Validators.required]],
       typeId: [null, [Validators.required]],
     });
   
   }
 
 
   save(){
     this.resultForm = Object.assign({}, this.form.getRawValue());
     console.log("🚀 ~ TestPageComponent ~ save ~ resultForm", this.resultForm);
   }


}
