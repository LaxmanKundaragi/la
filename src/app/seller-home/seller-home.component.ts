import { Component,OnInit } from '@angular/core';
import { prodduct } from '../data-type';
// import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  productList:undefined|prodduct[];
  productMessage:undefined|string;
  icon=faTrash;

constructor(private product:ProductService){}
ngOnInit(): void {
  this.List();
  
} 
  deleteProduct(id:number){
    console.warn("test id " ,id)

    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
       this.productMessage="Product is deleted";
       this.List()
     }

  })
  setTimeout(()=>{
   this.productMessage=undefined 
  },3000)
  
  }
 List(){
  this.product.productList().subscribe((result)=>{
    console.warn(result)
    if(result){
    this.productList=result;
  }
})
 }
} 


