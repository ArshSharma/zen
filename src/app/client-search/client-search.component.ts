import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from '../service/client-service.service'
import { Client } from '../model/client';
import { Router } from '@angular/router'
import { Session } from 'protractor';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {

  constructor(private clientServiceService : ClientServiceService,private _router:Router) { }

  
  public clients:Client[];
  
  ngOnInit() {
  }

  onKey(event: any) {
    if(event.target.value==''){
      this.clients=null;
    }
    else{
      this.getSearchList(event.target.value);
      // this.getclient
    }
  }
  getSearchList(inputSearch:string){
    this.clientServiceService.getFilteredList(inputSearch).subscribe(
      data=>{this.clients=data},
      err => console.error('cannot get list from api'),
      ()=>console.log('filtered customers loaded')
    )
    console.log(this.clients)
    
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
      this.tabList.push(client.firstName+' '+client.lastName +" | #" +client.clientId);
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


  editClient(event,editclient:Client){
    event.stopPropagation();
    console.log(editclient);
    console.log("hey it will edit");
    this._router.navigate(['/home',{outlets:{'sideNavOutlet':'editclient/'+editclient.clientId}}])
    
    
  }

}
