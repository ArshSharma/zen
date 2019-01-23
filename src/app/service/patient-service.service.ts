import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patient} from '../model/Patient';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
  
})
export class PatientServiceService {

  private _url= 'http://localhost:4400/';
  constructor(private http:HttpClient) { }

  getFilteredList(search:string) :Observable<Patient>{
    console.log(search)
    return this.http.get<Patient>(this._url+'patients/'+search)
  }

  getPatient(id:number): Observable<Patient>{
    return this.http.get<Patient>(this._url+'patients/get/'+id)
  }
}
