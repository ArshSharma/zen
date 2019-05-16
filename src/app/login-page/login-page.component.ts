import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { EmployeeServiceService } from '../service/employee-service.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import { StorageServiceModule } from 'angular-webstorage-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  validMessage:string="";
  constructor(private employeeService:EmployeeServiceService, private _route:Router) { }
  employeeData;
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    });
  }

  authLogin(){
    if(this.loginForm.valid){
      this.validMessage="Customer Added"
      this.employeeService.authLogin(this.loginForm.value).subscribe(
        data=>{
          if(data!=null){
        this.employeeData=data;
        console.log(this.employeeData);
        // this.data.addLogin(data);
        this._route.navigate(['/home', {outlets:{'sideNavOutlet':'patientSearch'}}])
          }
          else{
            this.validMessage="Invalid username or password"
          }
      },
      error =>{ return Observable.throw(error)} 
      );
    }
    else{
      this.validMessage="fill form"
    }
  }

}
