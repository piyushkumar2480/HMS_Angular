import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{Patient} from '../patient'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }


  name=JSON.parse(sessionStorage.PatientDetails).name;

  ngOnInit(): void {
  }
goToHomePage(){
this.router.navigate(['patient-home'])
}
}
