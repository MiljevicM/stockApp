import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagingRoutingModule } from './packaging-routing.module';
import { PackagingPageComponent } from './pages/packaging-page.component';


@NgModule({
  declarations: [PackagingPageComponent],
  imports: [
    CommonModule,
    PackagingRoutingModule
  ]
})
export class PackagingModule { }
