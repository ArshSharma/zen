import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { ClientServiceService } from '../service/client-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clientList: Client[]
  constructor( private clientService:ClientServiceService,private _router:Router) { }

  ngOnInit() {
    this.clientService.getAllClients().subscribe(
      data=>{
        this.clientList=data;
      })
  }
  tabList=[];
  replaceString:string;
  replaceIndex:number;
  clientSelect(client:Client) {
    console.log(client);
    console.log(client.firstName);
    
    this.tabList=JSON.parse(sessionStorage.getItem('tabList'));
    
    // console.log(client.getfirstName);
    if(this.tabList==null){
      this.tabList=[];
      this.tabList.push(client.firstName+' '+client.lastName +" | #" +client.clientId);
      sessionStorage.setItem('tabList',JSON.stringify(this.tabList));
      console.log("---------------");
      
      console.log(String(this.tabList.length-1));
      
      sessionStorage.setItem('tabIndex',String(this.tabList.length-1));
      sessionStorage.setItem(client.firstName+' '+client.lastName +" | #" +client.clientId, JSON.stringify(client));
      
    }
    else if(this.tabList.indexOf(client.firstName+' '+client.lastName +" | #" +client.clientId)==-1){
      this.tabList.push(client.firstName+' '+client.lastName + " | #" +client.clientId);
      sessionStorage.setItem('tabList',JSON.stringify(this.tabList));
      console.log("---------------");
      
      console.log(String(this.tabList.length-1));
      sessionStorage.setItem('tabIndex',String(this.tabList.length-1));
      sessionStorage.setItem(client.firstName+' '+client.lastName +" | #" +client.clientId, JSON.stringify(client));
    }
    else{
      
      this.replaceIndex=this.tabList.indexOf(client.firstName+' '+client.lastName +" | #" +client.clientId);
      sessionStorage.setItem('tabIndex', String(this.replaceIndex));
      
    }
    
    sessionStorage.setItem("drawerValue",'false');
    this._router.navigate([ '/home',{outlets:{'tabPageOutlet':'bookAppointment'}}])    
  }

}
