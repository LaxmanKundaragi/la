import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {prodduct} from '../data-type'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addProduct(data:prodduct)
  {
    // console.log("Service called")
    return this.http.post('http://localhost:3000/products',data)
  }
  productList(){
    return this.http.get<prodduct[]>("http://localhost:3000/products");
  }


  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
}
