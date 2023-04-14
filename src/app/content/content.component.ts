import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

title = "Angular Data binding";
isDisabled = false;
imageUrl = "D:\Angular\Angular\Images\download.JPG";
public showHeading:boolean = false;

display(){
  this.showHeading = true;
  alert("Hello world");
}

count = 0;
clickMe(){
  this.count++;
}

}
