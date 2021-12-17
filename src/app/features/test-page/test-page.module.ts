import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestPageRoutingModule } from './test-page-routing.module';
import { TestPageComponent } from './pages/test-page.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    TestPageComponent
  ],
  imports: [
    CommonModule,
    TestPageRoutingModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class TestPageModule { }
