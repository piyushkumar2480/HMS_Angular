import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Booking } from 'src/app/Models/booking';
import { PatientId } from 'src/app/Models/PatientId';
import { RegisterPatient } from 'src/app/Models/RegisterPatient';
import { Patient } from '../patient';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  patient:Patient=JSON.parse(sessionStorage.PatientDetails);
  booking:Booking=new Booking(new Date(),"","","",this.patient);
  registerPatientdata={}

  constructor(private _auth:AuthService) { }
  

  ngOnInit(): void {
  }
  bookAppointment(){
    this._auth.bookAppointment(this.booking)
    .subscribe(
      res=>alert("booking successful"),
      err=>alert("booking unsuccessful")
    )
  }

  }

