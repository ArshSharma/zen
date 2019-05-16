import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from '../model/product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url= 'http://localhost:4400/products/';


  constructor(private http:HttpClient) { }

  getFilteredProducts(search:string) :Observable<Product[]>{
    console.log(search)
    return this.http.get<Product[]>(this._url+'getFiltered/'+search)
  }
}
