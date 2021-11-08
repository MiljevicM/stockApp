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
import { FormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CompaniesPageComponent } from './ui/companies-page/companies-page.component';



@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    LoginPageComponent,
    InvoicesPageComponent,
    StockPageComponent,
    SalesPageComponent,
    PackagingPageComponent,
    CompaniesPageComponent
  
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
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
