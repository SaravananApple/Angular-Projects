import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  counter:number = 5;

  incrementCount(){
    this.counter++
  }

  decrementCount(){
 
  this.counter--;


}

getId(usrId: number){

  console.log(usrId)
}

}