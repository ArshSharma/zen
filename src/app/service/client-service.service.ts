import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../model/client';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
  
})
export class ClientServiceService {

  private _url= 'http://localhost:4400/';
  constructor(private http:HttpClient) { }

  getFilteredList(search:string) :Observable<Client[]>{
    console.log(search)
    return this.http.get<Client[]>(this._url+'clients/'+search)
  }

  getPatient(id:number): Observable<Client>{
    
    return this.http.get<Client>(this._url+'clients/get/'+id)
  }
  getAllClients():Observable<Client[]>{
    return this.http.get<Client[]>(this._url+'clients/ordered')
  }

  addCustomer(client): Observable<Client>{
    // customer.number=customer.number+'';
    // let body= JSON.stringify(customer);
    // console.log(body)
    return this.http.post<Client>(this._url+'clients/add',client,httpOptions )
  }
}
