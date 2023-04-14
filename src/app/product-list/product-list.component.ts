import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../Module/prod';
import { ProductSrvcService } from '../product-srvc.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
[x: string]: any;

  public productList: product[] = [];
  public proList:string[] = [];
  public usrRoll:any = '';
 


 constructor(private routing:Router,
  private prdSrvc:ProductSrvcService
  
  ){}

  ngOnInit():void{
    
this.usrRoll = localStorage.getItem('userRole');
console.log('userrole get from local storage',this.usrRoll);

console.log(this.prdSrvc.prodList);

this.proList = this.prdSrvc.prodList;

let conrtStr = this.prdSrvc.convertString(100);

console.log(conrtStr);

    this.productList = this.prdSrvc.productList;
  
  }
  
  
  editProduct(prodId?: number){

this.routing.navigateByUrl('edit-product/'+prodId)

  }



  
}


