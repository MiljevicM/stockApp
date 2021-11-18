import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { LoginPageComponent } from './ui/login-page/login-page.component';
import { InvoicesPageComponent } from './ui/invoices-page/invoices-page.component';
import { StockPageComponent } from './ui/stock-page/stock-page.component';
import { SalesPageComponent } from './ui/sales-page/sales-page.component';
import { PackagingPageComponent } from './ui/packaging-page/packaging-page.component';
import { ModalModule } from 'angular-custom-modal';
import { DpDatePickerModule } from 'ng2-date-picker';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CompaniesPageComponent } from './ui/companies-page/companies-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
  OWL_DATE_TIME_FORMATS,
} from 'ng-pick-datetime';
import { InvoicePageComponent } from './ui/invoice-page/invoice-page.component';


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
    LoginPageComponent,
    InvoicesPageComponent,
    StockPageComponent,
    SalesPageComponent,
    PackagingPageComponent,
    CompaniesPageComponent,
    InvoicePageComponent,
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
