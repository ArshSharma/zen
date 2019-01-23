import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageContentComponent } from './mainpage-content/mainpage-content.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppointmentSchedulePageComponent } from './appointment-schedule-page/appointment-schedule-page.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageContentComponent,
    PatientSearchComponent,
    LoginPageComponent,
    AppointmentSchedulePageComponent,
    AppointmentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
