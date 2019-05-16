import { Component, OnInit,DoCheck } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-mainpage-content',
  templateUrl: './mainpage-content.component.html',
  styleUrls: ['./mainpage-content.component.css']
})
export class MainpageContentComponent implements OnInit {

  constructor() { }
  
  drawerIsOpen=true;
  drawerClickValue=1;
  drawerVal;
  ngOnInit() {
    
    
  }

  ngDoCheck(){
    this.drawerVal=sessionStorage.getItem("drawerValue");
    sessionStorage.setItem('drawerValue','true');
    if(this.drawerVal=='false'){
      this.drawerIsOpen=false;
      
    }
  }

  
  toggleDrawer(drawerValue){
    if(this.drawerClickValue!=drawerValue && this.drawerIsOpen==true){
      this.drawerClickValue=drawerValue
    }
    else if(this.drawerIsOpen==true){
      
      this.drawerIsOpen=false;
    }else{
      this.drawerIsOpen=true;
    }
  }

}
