import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {ClientServiceService} from '../service/client-service.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  addPatientForm : FormGroup;
  client = new Client();
  constructor(private fb:FormBuilder,private clientService : ClientServiceService) { }

  ngOnInit() {
    this.addPatientForm = this.fb.group({
      firstName:['',[Validators.required, Validators.minLength(3)]],
      lastName:['',[Validators.required, Validators.minLength(3)]],
      email:['',[Validators.email]],
      dateOfBirth:['',[Validators.required]],
      phoneNumber:['',[Validators.required]],
      gender:'male'
    })
  }

  save(){
    console.log("he");
    console.log(this.addPatientForm);
    console.log(JSON.stringify(this.addPatientForm.value))
    
    this.clientService.addCustomer(JSON.stringify(this.addPatientForm.value)).subscribe(
      data=>{
        console.log(data)    
    },
    error =>{ return Observable.throw(error)} 
    );
    sessionStorage.setItem("drawerValue",'false');
  }

}
