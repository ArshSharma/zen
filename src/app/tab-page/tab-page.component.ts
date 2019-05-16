import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-tab-page',
  templateUrl: './tab-page.component.html',
  styleUrls: ['./tab-page.component.css']
})
export class TabPageComponent implements OnInit {

  background= 'primary';
  sec='accent';
  tabs=[];
  reciptTab=[];
  constructor() {
    
   }
   
   ngOnChanges(){
    
    
   }
  ngOnInit() {
    
  }
  ngDoCheck(){
    this.tabs = JSON.parse(sessionStorage.getItem('tabList'));
    this.selected.setValue(Number(sessionStorage.getItem('tabIndex')));
    this.reciptTab=JSON.parse(sessionStorage.getItem('reciptTabList'));
    console.log("------selected value -------");
    
    console.log(this.selected.value);
    // console.log('set value');
    // console.log(sessionStorage.getItem('tabIndex'));
    // console.log(this.selected.value)
    
  }
  
  
  selected = new FormControl(0);


  removeTab(index: number) {
    console.log(index);
    this.tabs.splice(index, 1);
    sessionStorage.setItem('tabList',JSON.stringify(this.tabs));
  }
  removeTabEvent(index: number) {
    console.log(index);
    this.tabs.splice(index, 1);
    sessionStorage.setItem('tabList',JSON.stringify(this.tabs));
    this.reciptTab=JSON.parse(sessionStorage.getItem('reciptTabList'));
    sessionStorage.setItem('tabIndex', String(this.tabs.length+this.reciptTab.length-1));
    this.selected.setValue(Number(sessionStorage.getItem('tabIndex')));
  }
  removeReciptTab(index: number) {
    console.log(index);
    this.reciptTab.splice(index, 1);
    sessionStorage.setItem('reciptTabList',JSON.stringify(this.reciptTab));
  }
  

}
