import { Component, OnInit, OnChanges, DoCheck,AfterContentChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PatientServiceService } from '../service/patient-service.service';
import { Patient } from '../model/Patient';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-appointment-schedule-page',
  templateUrl: './appointment-schedule-page.component.html',
  styleUrls: ['./appointment-schedule-page.component.css']
})
export class AppointmentSchedulePageComponent implements OnInit {
  date = new FormControl(new Date());
  currentDate = new Date().toLocaleDateString();
  
  serializedDate = new FormControl((new Date()).toISOString());
  minDate = new Date();
  maxDate = new Date(this.minDate.getFullYear()+1, this.minDate.getMonth(), this.minDate.getDate()) ;
  
  id: number=0;
  patient: Patient;
  constructor(private _route:ActivatedRoute, private patientService: PatientServiceService) {

    // console.log(new Date());
    // this._route.params.subscribe((x)=>{
    //   this.id=x.id;
    // })
    // console.log(this.id);
    // this.patientService.getPatient(this.id).subscribe(
    //   data=>{this.patient=data
    //   console.log(this.patient);
    //   }
    // )

   }
  

  

  ngOnInit() {
   
      this._route.params.subscribe(routeParams => {
        this.id =routeParams.id;
        console.log(routeParams.id);
        this.patientService.getPatient(this.id).subscribe(
          data=>{this.patient=data
         console.log(this.patient);
          })
      });
    
  }
  // ngAfterContentChecked(){
  //   // console.log(new Date());
  //   this._route.params.subscribe((x)=>{
  //     this.id=x.id;
  //   })
  //   // console.log(this.id);
  //   this.patientService.getPatient(this.id).subscribe(
  //     data=>{this.patient=data
  //     // console.log(this.patient);
  //     }
  //   )
  // }

}
