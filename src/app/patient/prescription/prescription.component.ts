import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AuthService } from 'src/app/auth.service';
export class Prescription {
 
  constructor(
 public doctorName: string,
 public id: number,
 public date: Date,
 public medicineName:string,
 public dailyMedicineQuantity:number,
 public noOfDays:number){}
  
}
var ELEMENT_DATA: Prescription[] = [];
//   {id: 1, dname: 'Dr.Sharma', date: '12-12-2020', medicineName: 'PCM' ,medicineQty: 10},
//   {id: 1, dname: 'Dr.Sharma', date: '12-12-2020', medicineName: 'PCM' ,medicineQty: 10},
//   {id: 1, dname: 'Dr.Sharma', date: '12-12-2020', medicineName: 'PCM' ,medicineQty: 10},
//   {id: 1, dname: 'Dr.Sharma', date: '12-12-2020', medicineName: 'PCM' ,medicineQty: 10},
//   {id: 1, dname: 'Dr.Sharma', date: '12-12-2020', medicineName: 'PCM' ,medicineQty: 10},
//   {id: 1, dname: 'Dr.Sharma', date: '12-12-2020', medicineName: 'PCM' ,medicineQty: 10},
//   {id: 1, dname: 'Dr.Sharma', date: '12-12-2020', medicineName: 'PCM' ,medicineQty: 10},
  
  
// ];



@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent  {

  displayedColumns: string[] = ['id', 'doctorName', 'date','medicineName',
        'dailyMedicineQuantity','noOfDays','getdetails'];
  dataSource = new MatTableDataSource<Prescription>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  getRecord()
  {
    window.open('file:///D:/PROJECT%20MATERIAL%20HMS/HospitalManagementSystem/HospitalManagementSystem/src/app/fileCollection/page.html','_blank');

  }
  constructor(private _auth:AuthService){
      this.viewPrescriptions();
  }

  viewPrescriptions(){
    this._auth.viewPrescriptions().subscribe(
      res=>{

          for(let i=0;i< res.length;i++){
            ELEMENT_DATA[i]=new Prescription(res[i].doctorName,res[i].id,res[i].date,
              res[i].medicineName,res[i].dailyMedicineQuantity,res[i].noOfDays)
          }

          console.log(ELEMENT_DATA[1])


      }
    )
  }



}
