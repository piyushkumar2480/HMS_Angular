import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Patient } from '../patient';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //   patient:Patient;
  // public email="";
  // public password="";
  email: string;
  password: string;
  invalidLogin: boolean;
  patientDetails: Patient;
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginPatient() {
    this._auth.loginPatient(this.email, this.password)
      .subscribe(
        // data => { 
        //   this.patient=data;
        //   console.log("name"+this.patient)}
        response => {
          if (response == null)
            alert("invalid login....");
          else {
            console.log(`auth resp ${response[0].name}`);
            // for (let u of response)
            // console.log(`Patient  ${JSON.stringify(u)}`);
            this.patientDetails = response[0];
            console.log(this.patientDetails.name);
            console.log(this.patientDetails.id)
            this.invalidLogin = false;
            sessionStorage.setItem("PatientDetails", JSON.stringify(this.patientDetails));
            this.router.navigate(["/patient-home"]);
          }

        },
        err => {
          alert("invalid login....");
          this.invalidLogin = true;
        }
      );


    // this.name="";
    // if (data == null) {
    //   //if invalid details
    //   this.password = "";


    //   // this.alertAdd.hidden = false;
    //   // this.loginAdd.shake = true;
    //   // this.loading = false;

    //   return;
    // }
    //if details are correct i.e data has some values
    // sessionStorage.setItem("prn", data);
    // this.router.navigate(["/student/notifications"]);



  }
}
