import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { Client } from '../model/client';
import { ClientServiceService } from '../service/client-service.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  id:number;
  client:Client;
  editPatientForm : FormGroup;
  constructor(private fb:FormBuilder, private clientService: ClientServiceService ,private _route:ActivatedRoute ,private _router:Router) { }

  ngOnInit() {
    this.editPatientForm = this.fb.group({
      clientId: '',
      firstName:['',[Validators.required, Validators.minLength(3)]],
      lastName:['',[Validators.required, Validators.minLength(3)]],
      email:['',[Validators.email]],
      dateOfBirth:['',[Validators.required]],
      phoneNumber:['',[Validators.required]],
      gender:'male'
    })
    this.id=+this._route.snapshot.paramMap.get('id');
    
    console.log(this.id);
    this.clientService.getPatient(this.id).subscribe(
      data=>{
        this.client=data;
        console.log(this.client.dateOfBirth)
        this.editPatientForm.patchValue({
          clientId:this.client.clientId,
          firstName:this.client.firstName,
          lastName:this.client.lastName,
          email:this.client.email,
          phoneNumber:this.client.phoneNumber,
          dateOfBirth:this.client.dateOfBirth,
          gender:this.client.gender
        })

        
      }
    );
  }


  save(){
    console.log("he");
    console.log(this.editPatientForm);
    console.log(JSON.stringify(this.editPatientForm.value))
    
    this.clientService.addCustomer(JSON.stringify(this.editPatientForm.value)).subscribe(
      data=>{
        console.log(data)    
    },
    error =>{ return Observable.throw(error)} 
    );
    sessionStorage.setItem("drawerValue",'false');
  }



  

}
