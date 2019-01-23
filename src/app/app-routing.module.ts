import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageContentComponent } from './mainpage-content/mainpage-content.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppointmentSchedulePageComponent } from './appointment-schedule-page/appointment-schedule-page.component';

const routes: Routes = [
  {path:'', component:LoginPageComponent},
  {path:'home', 
    component:MainpageContentComponent, 
    children:[
        {path:'patientSearch', component:PatientSearchComponent, outlet:'sideNavOutlet'},
        {path: 'bookAppointment/:id', component: AppointmentSchedulePageComponent, outlet:'tabPageOutlet'}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:"reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
