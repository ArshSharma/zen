import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageContentComponent } from './mainpage-content/mainpage-content.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { AppointmentSchedulePageComponent } from './appointment-schedule-page/appointment-schedule-page.component';
import { Client } from './model/client';
import { TabPageComponent } from './tab-page/tab-page.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ClientSearchComponent } from './client-search/client-search.component';
import { ClientListComponent } from './client-list/client-list.component';
import { AppointmentHistoryComponent } from './appointment-history/appointment-history.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { StatsComponent } from './stats/stats.component';


const routes: Routes = [
  {path:'', component:LoginPageComponent},
  {path:'home', 
    component:MainpageContentComponent, 
    children:[
        {path:'patientSearch', component:ClientSearchComponent, outlet:'sideNavOutlet'},
        {path: 'bookAppointment', component: TabPageComponent, outlet:'tabPageOutlet'},
        {path:'addPatient', component:AddPatientComponent, outlet:'sideNavOutlet'},
        {path:'clientList', component:ClientListComponent, outlet:'sideNavOutlet'},
        {path:'appointmentHistory', component:AppointmentHistoryComponent,outlet:'sideNavOutlet'},
        {path:'editclient/:id', component:ClientEditComponent, outlet:'sideNavOutlet'},
        {path:'stats', component:StatsComponent,outlet:'sideNavOutlet'}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:"reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
