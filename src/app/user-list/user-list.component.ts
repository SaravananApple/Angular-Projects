import { Component, OnInit } from '@angular/core';
import { Status } from './work';
import { Router } from '@angular/router';
import { ProductSrvcService } from '../product-srvc.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public userListBack: any[] = [];



  searchForm = new FormGroup({
    userId : new FormControl()
  });


  workStaus: Status[] = [

    {
      designer: 'Saravanan',
      pickTime: '12:30',
      completedTime: '11:30',
      staus: 'Pre-del'
    }
  ]



  public constructor(private rou: Router, private prodSrvc: ProductSrvcService) {

  }
  ngOnInit(): void {

    console.log("Before Calling backend method");
  





    console.log("Before Calling backend method");




  }

  public redirec() {
    this.rou.navigateByUrl('/student');
  }

  public searchUser(){
    let searchUserId = this.searchForm.controls.userId.value;
    console.log(searchUserId);

    this.prodSrvc.getUser(searchUserId).subscribe((resp) => {

      console.log("Response recieved from backend for specific user Id");


      console.log(resp);
      this.userListBack = resp;

    })

  }



}
