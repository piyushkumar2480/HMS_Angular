import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Patient } from './patient/patient';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegisterPatient } from './Models/RegisterPatient';
import { Booking } from './Models/booking';
import { Prescription } from './patient/prescription/prescription.component';
import { Report } from './patient/reports/reports.component';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // patient:Patient=new Patient;

  private _registerurl="http://localhost:8080/patients/p_register ";
  private _loginurl="http://localhost:8080/patients/p_login ";
  private _bookurl="http://localhost:8080/patients/p_booking";
private _appointmentHistoryUrl="http://localhost:8080/patients/appointments"
private _prescriptionUrl="http://localhost:8080/patients/prescriptions"
private _reportUrl="http://localhost:8080/patients/reports"
  constructor(private http:HttpClient) { }

  registerPatient(patient:RegisterPatient){
    return this.http.post<RegisterPatient>(this._registerurl,patient);
  }

  loginPatient(email:string,password:string){
    
    return this.http.post<any>(this._loginurl,{email,password}).pipe(map((resp) => {
      if(resp==null) return null;
      console.log(`token ${resp}`);
      sessionStorage.setItem("userDtls", email + ":" + password);
     // sessionStorage.setItem("jwtString", 'Bearer ' +resp.jwt);
      return resp;
    }));
  }
  bookAppointment(book:Booking){
    console.log(book)
    return this.http.post<Booking>(this._bookurl,book); 
  }

  viewAppointmentHistory():Observable<any>{

    return this.http.post<Booking>(this._appointmentHistoryUrl,JSON.parse(sessionStorage.PatientDetails))
  }

  viewPrescriptions():Observable<any>{
    return this.http.post<Prescription>(this._prescriptionUrl,JSON.parse(sessionStorage.PatientDetails))
  }
  viewReports():Observable<any>{
    return this.http.post<Report>(this._reportUrl,JSON.parse(sessionStorage.PatientDetails))
  }

  isUserLoggedIn(): boolean {
    let flag = true;
    if (sessionStorage.getItem("PatientDetails") === null)
      flag = false;
    console.log(`flag=${flag}`);
    return flag;
  }

  logout(): void {
    sessionStorage.removeItem("PatientDetails");
   // sessionStorage.removeItem("jwtString");
  }
}


// return this.http.post<Patient>(this._loginurl,{email,password}).pipe(map(resp => {
//   console.log(`token ${resp}`);