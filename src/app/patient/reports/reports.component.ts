
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AuthService } from 'src/app/auth.service';
export class Report {
  constructor(
    public id: number,
  public doctorName: string,
  public date: string,
  public testName: string){}
}
 const ELEMENT_DATA: Report[] = []
//   {id: 1, dname: 'Dr.Sharma', date: '12-12-2020', testName: 'Blood Test' ,pname: 'Nikita'},
//   {id: 1, dname: 'Dr.Sharma', date: '12-12-2020', testName: 'Blood Test' ,pname: 'Nikita'},
//   {id: 1, dname: 'Dr.Sharma', date: '12-12-2020', testName: 'Blood Test' ,pname: 'Nikita'},
//   {id: 1, dname: 'Dr.Sharma', date: '12-12-2020', testName: 'Blood Test' ,pname: 'Nikita'},
//   {id: 1, dname: 'Dr.Sharma', date: '12-12-2020', testName: 'Blood Test' ,pname: 'Nikita'},
//   {id: 1, dname: 'Dr.Sharma', date: '12-12-2020', testName: 'Blood Test' ,pname: 'Nikita'},
//   {id: 1, dname: 'Dr.Sharma', date: '12-12-2020', testName: 'Blood Test' ,pname: 'Nikita'},
//   {id: 1, dname: 'Dr.Sharma', date: '12-12-2020', testName: 'Blood Test' ,pname: 'Nikita'},
  
// ];



@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent  {

  displayedColumns: string[] = ['id', 'doctorName', 'date', 'testName', "getdetails"];
  dataSource = new MatTableDataSource<Report>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private _auth:AuthService){
     this.viewReports()
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  getRecord(doctorName: string)
  {
    alert("doctor name:"+doctorName);
  }
  viewReports(){
    this._auth.viewReports().subscribe(
      res=>{
        for(let i=0;i< res.length;i++){
          ELEMENT_DATA[i]=new Report(res[i].id,res[i].doctorName,res[i].date,
            res[i].testName)
        }
      }
    )
  }
}



