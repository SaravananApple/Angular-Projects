import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  

  title = 'Home';

  ngOnInit(): void {
   
    localStorage.setItem('userName', 'Saravanan');
    localStorage.setItem('userRole', 'admin');

  }
 
 
  onKeyUp(email:any) {
  
    console.log(email);
  }

  signOut(){
    localStorage.removeItem('userRole');
    localStorage.clear();
  }

}