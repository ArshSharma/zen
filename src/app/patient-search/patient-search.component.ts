import { Component, OnInit } from '@angular/core';
import {PatientServiceService} from '../service/patient-service.service'
import { Patient } from '../model/patient';
import { Router } from '@angular/router'

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {

  constructor(private patientServiceService : PatientServiceService,private _route:Router) { }

  
  public patients:Patient;
  
  ngOnInit() {
  }

  onKey(event: any) {
    if(event.target.value==''){
      this.patients=null;
    }
    else{
      this.getSearchList(event.target.value);
    }
  }
  getSearchList(inputSearch:string){
    this.patientServiceService.getFilteredList(inputSearch).subscribe(
      data=>{this.patients=data},
      err => console.error('cannot get list from api'),
      ()=>console.log('filtered customers loaded')
    )
    
  }

  patientSelect(patient:Patient){
    this._route.navigate([ '/home',{outlets:{'tabPageOutlet':'bookAppointment/'+patient.id}}])    
  }

}
