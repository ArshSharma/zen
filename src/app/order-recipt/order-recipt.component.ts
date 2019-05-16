import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { Order } from '../model/order';
import { Client } from '../model/client';
import { ClientServiceService } from '../service/client-service.service';

@Component({
  selector: 'app-order-recipt',
  templateUrl: './order-recipt.component.html',
  styleUrls: ['./order-recipt.component.css']
})
export class OrderReciptComponent implements OnInit, OnDestroy {
  @Input() name:string;

  constructor(private clientService : ClientServiceService) { }
  order : Order;
  client: Client;
  ngOnInit() {
    this.order=JSON.parse(sessionStorage.getItem(this.name));
    console.log(JSON.stringify(this.order))
    this.clientService.getPatient((this.order.client.clientId)).subscribe(
      data=>{
        this.order.client=data;
      }
    )
  }

  ngOnDestroy(){
    sessionStorage.removeItem(this.name)
  }

}
