import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomemainComponent } from './homemain/homemain.component';
import { AboutusComponent } from './myhome/aboutus/aboutus.component';
import { ContactusComponent } from './myhome/contactus/contactus.component';
import { AppointmentHistoryComponent } from './patient/appointment-history/appointment-history.component';
import { BookingComponent } from './patient/booking/booking.component';
import { LoginComponent } from './patient/login/login.component';
import { LogoutComponent } from './patient/logout/logout.component';
import { PatientHomepageComponent } from './patient/patient-homepage/patient-homepage.component';
import { PrescriptionComponent } from './patient/prescription/prescription.component';
import { ProfileComponent } from './patient/profile/profile.component';
import { RegisterComponent } from './patient/register/register.component';
import { ReportsComponent } from './patient/reports/reports.component';

const routes: Routes = [
  {
    path:'',
    component:HomemainComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'home',
    component:HomemainComponent
  },
  {
    path:'doctor',
    component:DoctorComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {path:'patient-home',component:PatientHomepageComponent},
  {path:'patient-home/booking' ,component:BookingComponent},
  // {path:'booking' ,component:BookingComponent},

  {path:'patient-home/appointments' ,component:AppointmentHistoryComponent},
  // {path:'appointments' ,component:AppointmentHistoryComponent}
  {path:'patient-home/prescriptions' ,component:PrescriptionComponent},
  {path:'patient-home/reports' ,component:ReportsComponent},
  {path:'patient-home/profile' ,component:ProfileComponent},
  {path:'patient-home/booking/profile' ,component:ProfileComponent},
  {path:'patient-home/appointments/profile' ,component:ProfileComponent},
  {path:'patient-home/reports/profile' ,component:ProfileComponent},
  {path:'patient-home/prescriptions/profile' ,component:ProfileComponent},
  {path:'patient-home/logout',component:LogoutComponent},
  {path:'patient-home/booking/logout' ,component:LogoutComponent},
  {path:'patient-home/appointments/logout' ,component:LogoutComponent},
  {path:'patient-home/reports/logout' ,component:LogoutComponent},
  {path:'patient-home/prescriptions/logout' ,component:LogoutComponent},
  {path:'patient-home/profile/logout' ,component:LogoutComponent},
  // {path:'booking/patient-homepage' ,component:PatientHomepageComponent},
  // {path:'appointments/patient-homepage' ,component:PatientHomepageComponent},
  // {path:'reports/patient-homepage' ,component:PatientHomepageComponent},
  // {path:'prescriptions/patient-homepage' ,component:PatientHomepageComponent},
  // {path:'profile/patient-homepage' ,component:PatientHomepageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
