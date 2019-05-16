import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageContentComponent } from './mainpage-content/mainpage-content.component';

import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppointmentSchedulePageComponent } from './appointment-schedule-page/appointment-schedule-page.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { TabPageComponent } from './tab-page/tab-page.component';
import { StorageServiceModule} from 'angular-webstorage-service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ClientSearchComponent } from './client-search/client-search.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientListItemComponent } from './client-list-item/client-list-item.component';
import { AppointmentHistoryComponent } from './appointment-history/appointment-history.component';
import { OrderReciptComponent } from './order-recipt/order-recipt.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import {CalendarModule} from 'primeng/calendar';
import {NgxPrintModule} from 'ngx-print';
import { AppointmentHistoryItemComponent } from './appointment-history-item/appointment-history-item.component';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  declarations: [
    AppComponent,
    MainpageContentComponent,
    ClientSearchComponent,
    LoginPageComponent,
    AppointmentSchedulePageComponent,
    AppointmentPageComponent,
    TabPageComponent,
    AddPatientComponent,
    ClientListComponent,
    ClientListItemComponent,
    AppointmentHistoryComponent,
    OrderReciptComponent,
    ClientEditComponent,
    AppointmentHistoryItemComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StorageServiceModule,
    NgxPrintModule,
    
    MDBBootstrapModule.forRoot(),
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
