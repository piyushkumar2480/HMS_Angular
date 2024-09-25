import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import{MatFormFieldModule} from '@angular/material/form-field'
import{ MatInputModule} from '@angular/material/input'
import{ MatSidenavModule} from '@angular/material/sidenav'
import{MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
const Material=[
  MatButtonModule,MatFormFieldModule,MatInputModule,MatSidenavModule,
  MatListModule,MatIconModule,MatToolbarModule,MatGridListModule,MatTableModule,
  MatPaginatorModule,MatSelectModule,MatNativeDateModule,MatCheckboxModule,
  MatDatepickerModule
]

@NgModule({
  
  imports: [ Material,
   
    //CommonModule
   // MatButtonModule
  ],
  exports:[Material]
})
export class MaterialModule { }
