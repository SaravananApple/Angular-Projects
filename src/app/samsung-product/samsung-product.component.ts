import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { itemsLists } from '../Module/Items';
import { modelList } from '../Module/model';

@Component({
  selector: 'app-samsung-product',
  templateUrl: './samsung-product.component.html',
  styleUrls: ['./samsung-product.component.css']
})
export class SamsungProductComponent implements OnInit {
  
public product:itemsLists[] = [];


  

  constructor(private routing:Router){

  }

  ngOnInit(): void {
   


    this.product = [
      {
        modelId:100,
        modelName:"F13",
        price:20000,
        sizes:"L",
        head:"Samsung F13",
        imageOfItems:"assets/Mobile products/Samsung product/A23.jpg",
        viewBtn:"VIEW DETAIL"
      },
      {
        modelId:102,
        modelName:"M04",
        price:20000,
        sizes:"L",
        head:"Samsung M04",
        imageOfItems:"assets/Mobile products/Samsung product/F04.jpg",
        viewBtn:"VIEW DETAIL"
      },
      {
        modelId:103,
        modelName:"A23",
        price:20000,
        sizes:"L",
        head:"Samsung F13",
        imageOfItems:"assets/Mobile products/Samsung product/F13.jpg",
        viewBtn:"VIEW DETAIL"
      },
    ]

  }

view(pro:number){
this.routing.navigateByUrl('view-model/' + pro);

}

}
