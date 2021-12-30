import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagingRoutingModule } from './packaging-routing.module';
import { PackagingPageComponent } from './pages/packaging-page.component';
import { PackagingCreateComponent } from './blocks/packaging-create/packaging-create.component';


@NgModule({
  declarations: [PackagingPageComponent, PackagingCreateComponent],
  imports: [
    CommonModule,
    PackagingRoutingModule
  ]
})
export class PackagingModule { }
