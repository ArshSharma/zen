import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Order } from '../model/order';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _url= 'http://localhost:4400/';
  constructor(private http:HttpClient) { }
  
  addOrder(order): Observable<Order>{
    // customer.number=customer.number+'';
    // let body= JSON.stringify(customer);
    // console.log("------------");
    
    
    // console.log(order)
    return this.http.post<Order>(this._url+'orders/add',order,httpOptions )
  }


  getAllOrders():Observable<Order[]>{
    return this.http.get<Order[]>(this._url+'orders/all')
  }

  getOrdersForDate(date):Observable<Order[]>{
    
    return this.http.post<Order[]>(this._url+'orders/getByAppointmentDate', date,httpOptions );
  }
}
