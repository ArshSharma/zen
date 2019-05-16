import { Component, OnInit, OnChanges, DoCheck,AfterContentChecked, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ClientServiceService } from '../service/client-service.service';
import { Client } from '../model/Client';
import {FormControl, FormGroup, FormBuilder, FormArray} from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { OrderService } from '../service/order.service';
import { Order } from '../model/order';

@Component({
  selector: 'app-appointment-schedule-page',
  templateUrl: './appointment-schedule-page.component.html',
  styleUrls: ['./appointment-schedule-page.component.css']
})
export class AppointmentSchedulePageComponent implements OnInit, OnDestroy {
  @Input() namea:string;
  @Output()
  closeTab:EventEmitter<string> = new EventEmitter<string>();
  patient:Client;
  date = new FormControl(new Date());
  currentDate = new Date();
  orderForm : FormGroup;
  serializedDate = new FormControl((new Date()).toISOString());
  minDate = new Date();
  maxDate = new Date(this.minDate.getFullYear()+1, this.minDate.getMonth(), this.minDate.getDate()) ;
  products:Product[];
  id: number=0;
  currentFocusItem:number=0;
  total:number= 0;
  tabs=[];
  grandTotal:number=0;
  constructor(private _route:ActivatedRoute, private clientService: ClientServiceService,private fb:FormBuilder, private productService: ProductService, private orderService: OrderService) {

 
   }
  

  

  ngOnInit() {
    this.total=0;
    
      this.patient=JSON.parse(sessionStorage.getItem(this.namea));
      
      this.orderForm = this.fb.group({
        client:{
          clientId:this.patient.clientId
        },
        total:"",
        appointmentDate:this.currentDate,
        discount:0,
        orderDate:this.currentDate,
        orderDetails: this.fb.array([this.buildOrderList()])
        
      }) 
  }

  ngOnDestroy(){
    sessionStorage.removeItem(this.namea)
  }
 
  get orderDetails(): FormArray{
    return <FormArray>this.orderForm.get('orderDetails');
  }

  onKey(event: any, pos: number) {
    this.currentFocusItem=pos;

    if(event.target.value==''){
      // this.clients=null;
      
      
    }
    else{
      // this.getSearchList(event.target.value);
      // this.getclient
      this.getSearchProductList(event.target.value);
      console.log(event.target.value);
    }
  }

  getSearchProductList(inputSearch: string){
    this.productService.getFilteredProducts(inputSearch).subscribe(
      data=>{this.products=data},
      err => console.error('cannot get list from api'),
      ()=>console.log('filtered customers loaded')
    )
    console.log(this.products)
    
  }

  productSelect(product: Product){
    
    var isDirty=false;
    for(let order in this.orderDetails.controls){
      var updatedQuantityValue=this.orderDetails.at(parseInt(order)).get('quantity').value;
      if(this.orderDetails.at(parseInt(order)).get('products.description').value==product.description){
        updatedQuantityValue=updatedQuantityValue+1;
        this.orderDetails.at(parseInt(order)).patchValue({
          quantity:updatedQuantityValue  
        })
        isDirty=true;
      }
      

    }
    if(isDirty==false){
    
    
    this.orderDetails.at(this.currentFocusItem).patchValue({
      products: {productId:product.productId,
      description:product.description,
      price:product.price},
      quantity:1
    })
    this.orderDetails.push(this.buildOrderList());
  }
    this.products=[];
    this.checkTotal();
  }

  buildOrderList() :FormGroup{
    return this.fb.group({
      products:this.fb.group({
        description:'',
        productId:'',
        price:''
      }),
      // description:'',
      quantity:'',
      // price:'',
      discount:''
    })
  }

  submit(){
    
    this.deleteEntry(this.orderDetails.length-1)
    
    this.orderService.addOrder(JSON.stringify(this.orderForm.value)).subscribe(
      data=>{
       this.setReciptTab(data);
       this.closeTab.emit();
    });
    
  }

  onQuantityChange(event: any, pos:number){
    
    var currentQuantityValue=this.orderDetails.at(pos).get('quantity').value;
    console.log(currentQuantityValue);
    this.checkTotal();

  }

  onDiscountChange($event){
    this.checkTotal();
  }
  checkTotal(){
    this.total=0;
    for(let order in this.orderDetails.controls){
      this.total=this.total+this.orderDetails.at(parseInt(order)).get('products.price').value* this.orderDetails.at(parseInt(order)).get('quantity').value;
    }
    this.grandTotal=this.total-this.orderForm.get('discount').value;
    this.orderForm.patchValue({
      total:this.total
    })

  }

  // ngAfterContentChecked(){
  //   // console.log(new Date());
  //   this._route.params.subscribe((x)=>{
  //     this.id=x.id;
  //   })
  //   // console.log(this.id);
  //   this.patientService.getPatient(this.id).subscribe(
  //     data=>{this.patient=data
  //     // console.log(this.patient);
  //     }
  //   )
  // }
  deleteEntry(index:number){
    this.orderDetails.removeAt(index);
    this.checkTotal();
  }
  reciptTabList=[];
  setReciptTab(reciptData:Order){
    this.reciptTabList=JSON.parse(sessionStorage.getItem('reciptTabList'));
    this.tabs=JSON.parse(sessionStorage.getItem('tabList'));
  
    
    console.log("---------------");
    if(this.reciptTabList==null){
      this.reciptTabList=[];
      this.reciptTabList.push(this.patient.firstName+' '+this.patient.lastName+' | Recipt '+reciptData.orderId);
      sessionStorage.setItem('reciptTabList',JSON.stringify(this.reciptTabList));
      // console.log("---------------");
      
      console.log(String(this.reciptTabList.length-1));
      
      sessionStorage.setItem('tabIndex',String(this.reciptTabList.length-1));
      sessionStorage.setItem(this.patient.firstName+' '+this.patient.lastName+ ' | Recipt ' +reciptData.orderId, JSON.stringify(reciptData));
      
    }
    else if(this.reciptTabList.indexOf(this.patient.firstName+' '+this.patient.lastName + ' | Recipt ' +reciptData.orderId)==-1){
      this.reciptTabList.push(this.patient.firstName+' '+this.patient.lastName+ ' | Recipt ' +reciptData.orderId);
      sessionStorage.setItem('reciptTabList',JSON.stringify(this.reciptTabList));
      
      console.log(String(this.reciptTabList.length-1));
      // sessionStorage.setItem('tabIndex',String(this.tabList.length-1));
      sessionStorage.setItem(this.patient.firstName+' '+this.patient.lastName + ' | Recipt ' +reciptData.orderId, JSON.stringify(reciptData));
    }
    else{
      
      // this.replaceIndex=this.tabList.indexOf(client.firstName+' '+client.lastName);
      // sessionStorage.setItem('tabIndex', String(this.replaceIndex));
      
    }
    // sessionStorage.setItem('tabIndex', String(this.tabs.length-1+this.reciptTabList.length-1));
    
    // sessionStorage.setItem("drawerValue",'false');
    // this._route.navigate([ '/home',{outlets:{'tabPageOutlet':'bookAppointment'}}])    
  }
  

}
