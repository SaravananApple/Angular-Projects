import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { product } from '../Module/prod';
import { checkValue } from './custom-function';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

 

public productForm = new FormGroup({

  productName: new FormControl ("",[Validators.required, Validators.maxLength(5)]),
  price: new FormControl("0",[Validators.required]),
  quantityAval: new FormControl("",[Validators.required]),
  sizes: new FormControl(),
  discount: new FormControl("", [checkValue])
})


ngOnInit():void{
 
}

addProduct(){
  console.log(this.productForm.value);
}

  

}
