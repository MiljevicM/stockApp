import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';

import { ModalModule } from 'angular-custom-modal';
import { DpDatePickerModule } from 'ng2-date-picker';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
  OWL_DATE_TIME_FORMATS,
} from 'ng-pick-datetime';

import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';


// Format custom
export const MY_CUSTOM_FORMATS = {
  parseInput: 'DD/MM/YYYY HH:mm:ss',
  fullPickerInput: 'DD/MM/YYYY HH:mm:ss',
  datePickerInput: 'DD/MM/YYYY',
  timePickerInput: ' HH:mm:ss',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY',
};


@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
  
    LayoutComponent,
    NavigationComponent,
    FooterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    ModalModule,
    DpDatePickerModule,
    FormsModule,
    NgSelectModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
  ],
  
  providers: [
    { provide: OWL_DATE_TIME_FORMATS, useValue: MY_CUSTOM_FORMATS },
  ],
  
  bootstrap: [AppComponent],
})
export class AppModule {}
