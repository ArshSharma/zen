import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../model/client';

@Component({
  selector: 'app-client-list-item',
  templateUrl: './client-list-item.component.html',
  styleUrls: ['./client-list-item.component.css']
})
export class ClientListItemComponent implements OnInit {

  @Input() client:Client;
  constructor() { }

  ngOnInit() {
  }

}
