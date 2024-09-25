import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { MaterialModule } from '../material/material.module';
import { HomefooterComponent } from './homefooter/homefooter.component';
import { UppernavbarComponent } from './uppernavbar/uppernavbar.component';
import { ImpUpdatesComponent } from './imp-updates/imp-updates.component';
import { CrausaldisplayComponent } from './crausaldisplay/crausaldisplay.component';
import { UpperfooterComponent } from './upperfooter/upperfooter.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [NavigationbarComponent, HomefooterComponent, UppernavbarComponent, ImpUpdatesComponent, CrausaldisplayComponent, UpperfooterComponent, AboutusComponent, ContactusComponent, ServicesComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class MyhomeModule { }
