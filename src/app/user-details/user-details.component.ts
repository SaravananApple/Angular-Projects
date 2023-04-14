import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { student } from '../Module/StudentData';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  // public usrDtl: student;
  public stuData:student[] = [
    {
      Id:100,
      FirstName:'Saravanan',
      LastName:'Pushparaj',
      Class:10,
      Age:17,
      marks: 50,
      percentage:0.85,
      updated: new Date()
    },
    {
      Id:101,
      FirstName:'Senthil',
      LastName:'Gowdham',
      Class:12,
      Age:19,
      marks: 12,
      percentage:0.78,
      updated: new Date()
    },
    {
      Id:102,
      FirstName:'Dhanush',
      LastName:'Vijay',
      Class:12,
      Age:16,
      marks: 24,
      percentage:0.65,
      updated: new Date()
    },
    {
      Id:105,
      FirstName:'Vijay',
      LastName:'Ajith',
      Class:12,
      Age:16,
      marks: 69,
      percentage:0.65,
      updated: new Date()
    },
    {
      Id:106,
      FirstName:'Simbu',
      LastName:'Dhanush',
      Class:12,
      Age:16,
      marks: 100,
      percentage:0.65,
      updated: new Date()
    }
    
   
  ]

  constructor(private act:ActivatedRoute){

  }
  
  ngOnInit():void{
    this.act.params.subscribe(val => {
      console.log(val['usrId']);
      this.stuData.filter(usr => usr.Id = val['usrId'])
      // this.usrDtl = this.stuData[0];
    })
  }



}
