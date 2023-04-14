import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { product } from '../Module/prod';
import { ProductSrvcService } from '../product-srvc.service';
import { checkValue } from '../reactive/custom-function';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  public productL: product[] = [];


  public productForm = new FormGroup({

    productName: new FormControl ("",[Validators.required, Validators.maxLength(5)]),
    price: new FormControl(),
    quantityAval: new FormControl(),
    sizes: new FormControl(),
    discount: new FormControl('', [checkValue])
  })



constructor(private rou:ActivatedRoute, private proSrvc:ProductSrvcService){

}

ngOnInit():void{
 
let userRole = localStorage.getItem('userName');

// console.log(this.proSrvc.prodList.push('p4'));

this.proSrvc.prodList.push('p4');

  this.productL = this.proSrvc.productList;


// Not working 
//  this.rou.paramMap.subscribe((val)=>
//  {
//   let proId  = val['id'];
//   let filterList = this.productL.filter(prod => prod.prodId == proId );
//   console.log(this.productL);

//  }
//  )

let proId = this.rou.snapshot.params['pId']
let filterList = this.productL.filter(prod => prod.prodId == proId );
console.log(filterList);

// if(filterList.length > 0){
//   this.productForm.setValue({
//     productName:filterList[0].proName,
//     price:filterList[0].price,
//     quantityAval:filterList[0].qualityAvl,
//     sizes:filterList[0].size,
//     discount:filterList[0].discount
//   })
// }



}



  addProduct(){
    console.log(this.productForm.value);
  }



}
