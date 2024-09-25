import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {MatButtonModule} from '@angular/material/button'
import { LoginComponent } from './patient/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import{MaterialModule} from './material/material.module'

import { NavigationbarComponent } from './myhome/navigationbar/navigationbar.component';
import { HomefooterComponent } from './myhome/homefooter/homefooter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UppernavbarComponent } from './myhome/uppernavbar/uppernavbar.component';
import { ImpUpdatesComponent } from './myhome/imp-updates/imp-updates.component';
import { CrausaldisplayComponent } from './myhome/crausaldisplay/crausaldisplay.component';
import { UpperfooterComponent } from './myhome/upperfooter/upperfooter.component';
import { AboutusComponent } from './myhome/aboutus/aboutus.component';
import { ContactusComponent } from './myhome/contactus/contactus.component';
import { ReportsComponent } from './patient/reports/reports.component';
import { AppointmentHistoryComponent } from './patient/appointment-history/appointment-history.component';
import { PatientHomepageComponent } from './patient/patient-homepage/patient-homepage.component';
import { NavbarComponent } from './patient/navbar/navbar.component';
import { SidebarComponent } from './patient/sidebar/sidebar.component';
import { BookingComponent } from './patient/booking/booking.component';
import { RegisterComponent } from './patient/register/register.component';
import { FormsModule } from '@angular/forms';
import { HomemainComponent } from './homemain/homemain.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AdminComponent } from './admin/admin.component';
import { PrescriptionComponent } from './patient/prescription/prescription.component';
import { ProfileComponent } from './patient/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { LogoutComponent } from './patient/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
   NavbarComponent,
   LoginComponent,
   SidebarComponent,
   BookingComponent,
   NavigationbarComponent,
   HomefooterComponent,
   UppernavbarComponent,
   ImpUpdatesComponent,
   CrausaldisplayComponent,
   UpperfooterComponent,
   AboutusComponent,
   ContactusComponent,
   ReportsComponent,
   AppointmentHistoryComponent,
   PatientHomepageComponent,
   HomemainComponent,
   DoctorComponent,
   AdminComponent,
   PrescriptionComponent,
   ProfileComponent,
  LogoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   // MatButtonModule,
  //  MatFormFieldModule,
    MaterialModule,
   BrowserAnimationsModule,
   FormsModule,
   // PatientModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
