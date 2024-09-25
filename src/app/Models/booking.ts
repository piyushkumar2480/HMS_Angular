import { Patient } from "../patient/patient";
import { PatientId } from "./PatientId";

export class Booking{
    constructor(
        
        //public id:any,
       public date:Date,
       public time:string,
       public doctorName:string,
       public reason:string,
       public patient?:Patient,
    ){

    }
}