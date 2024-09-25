import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  patient:Patient=JSON.parse(sessionStorage.PatientDetails);
  //activeUser: Patient;

  // selectUser(patient: Patient) {
  //   this.activeUser = patient;
  //   console.log(this.activeUser);
  // }

  // onUserCreated(event: { patient: any; }) {
  //   this.patients.push(event.patient);
  // }

}
