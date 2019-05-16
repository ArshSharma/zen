import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service'
import { Order } from '../model/order';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.css']
})
export class AppointmentHistoryComponent implements OnInit {
  private dateForm: FormGroup;
  
  constructor( private orderService: OrderService, private fb:FormBuilder) { }
  orderList: Order[];
  date = new Date();
  ngOnInit() {
    this.dateForm=this.fb.group({
      date:this.date
    })
    
    this.orderService.getAllOrders().subscribe(
      data=>{
        console.log(this.date);
        
      this.orderList=data;
      this.sortListBasedOnAppointmentDateDesc();
     
      
    })
    
  }

  sortListBasedOnAppointmentDateDesc(){
    this.orderList.sort((a:Order, b:Order)=>{
      if(a.appointmentDate.valueOf()>b.appointmentDate.valueOf()){
        return -1;
      }
      else{
        return 1;
      }
    })
  }

  dateChanged(event: MatDatepickerInputEvent<Date>) {
    
    console.log(JSON.stringify(this.dateForm.value));
    this.orderService.getOrdersForDate(JSON.stringify(this.dateForm.value)).subscribe(
      data=>{
        this.orderList=data;
        console.log(JSON.stringify(data));
    })
  }
  

}
