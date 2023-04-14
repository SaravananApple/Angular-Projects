import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

@Input() count:number = 0;  

@Output() id:EventEmitter<number> = new EventEmitter();

sentId(){
  this.id.emit(10);
}

}
