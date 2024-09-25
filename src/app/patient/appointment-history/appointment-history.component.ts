import { Component,ViewChild,AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, MatSortable} from '@angular/material/sort';
import { AuthService } from 'src/app/auth.service';
import { Booking } from 'src/app/Models/booking';
import { Identifiers } from '@angular/compiler';



/**
 *  Basic use of `<table mat-table>`
 */

 export class display {
//   id: number;
//   date: string;
//   dname: string;
//   reason: string;
  constructor(
    public id:number,
    public time:string,
  public date:Date,
  public doctorName:string,
  public reason:string){}
 }

  var ELEMENT_DATA:display[]=[]

// var ELEMENT_DATA: Booking[];
// = [
  //{time:"1",date: new Date('12-12-2020'), doctorName:'Dr.Sharma', reason: 'General'}
  // {id: 1, date: '12-12-2020', dname:'Dr.Sharma', reason: 'General'},
  // {id: 1, date: '12-12-2020', dname:'Dr.Sharma', reason: 'Kidney'},
  // {id: 1, date: '12-12-2020', dname:'Dr.Sharma', reason: 'General'},
  // {id: 1, date: '12-12-2020', dname:'Dr.Sharma', reason: 'General'},
  // {id: 1, date: '12-12-2020', dname:'Dr.Sharma', reason: 'General'},
  // {id: 1, date: '12-12-2020', dname:'Dr.Sharma', reason: 'General'},
  // {id: 1, date: '12-12-2020', dname:'Dr.Sharma', reason: 'Heart'},
  // {id: 1, date: '12-12-2020', dname:'Dr.Sharma', reason: 'Kidney'}

  
//];
@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.css']
})
export class AppointmentHistoryComponent{

   ELEMENT_DATA2: display[]=[];

  displayedColumns: string[] = ['id','time', 'date', 'doctorName', 'reason'];
  dataSource = new MatTableDataSource<display>(ELEMENT_DATA);

 @ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

 ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
    this.sort.sort(({ id: 'id', start: 'asc'}) as MatSortable);

   this.dataSource.sort = this.sort;
 }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
   
  }
  
  constructor(private _auth:AuthService){
    this.viewAppointments()
   

   // this.applyFilter()
  
  }

  viewAppointments(){
    return this._auth.viewAppointmentHistory().subscribe(
      res=>{
       // console.log(res);

        //for(let i=0;i<res.length;i++){
         // id:Number=JSON.parse(res[i]).bookingId;
        //let  time:String=JSON.parse(res[i]).time;
    //     let time=(JSON.parse(res[i])).time;
    //     console.log(time);
    //    let date=(JSON.parse(res[i])).date;
    //  let doctorName=(JSON.parse(res[i])).doctorName;
    //     let reason=(JSON.parse(res[i])).reason;
          
    //     this.ELEMENT_DATA[i]={time:time,date:date,doctorName:doctorName,reason:reason};
       
          //  let obj:Booking=res[i]///json()//JSON.parse(res[i])
         //   this.ELEMENT_DATA[i]=obj;
        //    this.ELEMENT_DATA[i]={time:obj.time,date:obj.date,doctorName:obj.doctorName,reason:obj.reason};
       
  //}

        // for(let i of res){

 

        //   ELEMENT_DATA.push(new display(i.bookingId,i.time,i.date,i.doctorName,i.reason));
        //   ELEMENT_DATA[i]
        // }
        for(let i=0;i< res.length;i++){
          ELEMENT_DATA[i]=new display(res[i].id,res[i].time,res[i].date,res[i].doctorName,res[i].reason)
         
        }

        this.ELEMENT_DATA2=ELEMENT_DATA
        console.log(ELEMENT_DATA[0])


        //console.log("data"+JSON.stringify(this.ELEMENT_DATA[0]));


      }
    )
  }

  
}

