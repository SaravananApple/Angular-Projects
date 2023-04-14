import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductSrvcService } from '../product-srvc.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  
  constructor(private prodSrvc:ProductSrvcService){

  }
  
  
  ngOnInit(): void {
    
// this.prodSrvc.addUser().subscribe((resp)=>{

// console.log(resp);

// })

  }


  userForm = new FormGroup({
    userName : new FormControl("",[Validators.required]),
    jobName : new FormControl("",[Validators.required])

  });


  addUser(){
  
console.log(this.userForm.value);
this.prodSrvc.addUser(this.userForm.value).subscribe((rep)=>{

console.log(rep);

})
  }

}
