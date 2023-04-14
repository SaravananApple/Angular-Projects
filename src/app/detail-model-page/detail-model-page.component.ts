import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { itemsLists } from '../Module/Items';
import { modelList } from '../Module/model';


@Component({
  selector: 'app-detail-model-page',
  templateUrl: './detail-model-page.component.html',
  styleUrls: ['./detail-model-page.component.css']
})
export class DetailModelPageComponent implements OnInit{
 
public product:modelList[] = [] ;


  public samsungItems:modelList[] = [];

constructor(private rou:ActivatedRoute){

}

  ngOnInit(): void {
 
    this.samsungItems = [
      {
        modelId:100,
        modelName:"F13",
        price:20000,
        sizes:"L",
        head:"Samsung F13",
        imageOfItems:"assets/Mobile products/Samsung product/A23.jpg",
        viewBtn:"BUY"
        },
        {
          modelId:102,
          modelName:"M04",
          price:20000,
          sizes:"L",
          head:"Samsung M04",
          imageOfItems:"assets/Mobile products/Samsung product/F04.jpg",
          viewBtn:"BUY"
          },
          {
            modelId:103,
            modelName:"A23",
            price:20000,
            sizes:"L",
            head:"Samsung F13",
            imageOfItems:"assets/Mobile products/Samsung product/F13.jpg",
            viewBtn:"BUY"
            },

    ]

this.rou.params.subscribe(val => {
let d  = this.samsungItems.filter(id => id.modelId == val['id'])

this.product[0] = d[0]




})

}





}
