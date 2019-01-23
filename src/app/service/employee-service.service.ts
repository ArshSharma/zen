import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private _url= 'http://localhost:4400/';
  constructor(private http:HttpClient) { }

  authLogin(employee){
    let body= JSON.stringify(employee);
    console.log(body)
    return this.http.post(this._url+'employee/login',body,httpOptions )
  }

}
