import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import{Patient} from "./patient"
import { Form, FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component'
import {MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule} from '../material/material.module';
import { BookingComponent } from './booking/booking.component';
import { SidebarComponent } from './sidebar/sidebar.component'
import{ReportsComponent} from './reports/reports.component';
import { AppointmentHistoryComponent } from './appointment-history/appointment-history.component';
import { PatientHomepageComponent } from './patient-homepage/patient-homepage.component'
import { ProfileComponent } from './profile/profile.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent,NavbarComponent, BookingComponent,
     SidebarComponent,ReportsComponent, AppointmentHistoryComponent, PatientHomepageComponent,
     ProfileComponent,PrescriptionComponent, LogoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    
  ]
  //exports:[MatButtonModule]
})
export class PatientModule { }
