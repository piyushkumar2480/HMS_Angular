import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }

  onclick(myValue: string){
    alert("Thankyou " +myValue+ " for your details !!! \n We will contact u soon ");
  }

}
