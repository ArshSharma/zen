import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../model/order';

@Component({
  selector: 'app-appointment-history-item',
  templateUrl: './appointment-history-item.component.html',
  styleUrls: ['./appointment-history-item.component.css']
})
export class AppointmentHistoryItemComponent implements OnInit {

  @Input()
  order: Order;
  constructor() { }

  ngOnInit() {
  }

}
