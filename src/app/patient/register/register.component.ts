import { Component, Directive, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { RegisterPatient } from 'src/app/Models/RegisterPatient';
import { Patient } from '../patient';


// import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
// import { ErrorStateMatcher } from '@angular/material/core';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const invalidCtrl = !!(control && control.invalid);// && control.parent.dirty);
//     const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

//     return (invalidCtrl || invalidParent);
//   }
// }

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {

  // myForm: FormGroup;

  // matcher = new MyErrorStateMatcher();

  // constructor(private formBuilder: FormBuilder,private _auth:AuthService) {
  //   this.myForm = this.formBuilder.group({
  //     password: ['', [Validators.required]],
  //     confirmPassword: ['']
  //   }, { validator: this.checkPasswords });

  // }

  // checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  //   let pass = group.controls.password.value;
  //   let confirmPass = group.controls.confirmPassword.value;

  //   return pass === confirmPass ? null : { notSame: true }
  // }
     patient:RegisterPatient=new RegisterPatient("","","","","","","","","");
     registerPatientdata={}
  //  @Input() cpassword:string;

  checked=false;
  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
  }

  ticked(){
    this.checked=true;
  }

  checkPassword(cpassword:string){
     if(this.patient.password!=cpassword)
       alert("Passwords dont match")
    //console.log(cpassword+"  "+this.patient.password)
  }
  registerPatient(){
    this._auth.registerPatient(this.patient)
    .subscribe(
      res=>alert("registered successful"),
      err=>alert("registered unsuccessful")
    )
  }

}
