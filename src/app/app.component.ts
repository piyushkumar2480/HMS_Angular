import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HospitalManagementSystem';


  // to be checked dynamically
  isLoggedIn(){
   
    return true;
  }
}
