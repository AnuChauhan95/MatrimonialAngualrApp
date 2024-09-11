import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ErrorHandleServiceService } from 'src/app/error-serve/error-handle-service.service';

import { ILogin } from 'src/app/login-models/ilogin';
import { LoginServiceService } from 'src/app/login-service/login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {
  formCreation!: FormGroup;
  loginData!: ILogin;
  errorHandle: any;
 errMsg:any=this._errSer.errMsg;
 isLoading=false;

  constructor(private readonly _service: LoginServiceService, private readonly _route: Router,private readonly _errSer:ErrorHandleServiceService,private _spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.addLogin();

  }


  

  addLogin() {
    this.formCreation = new FormGroup({
      UserEmail: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      UserPassword: new FormControl('', Validators.required),

    })
  }

  openSpinner=()=>{
    this.isLoading=true;
    
    this._spinner.show();
    setTimeout(() => {
      this._spinner.hide();
    },90000);
  }

  saveLogin() {
   
    this.loginData = {
      userName: this.formCreation.get('UserEmail')?.value,
      password: this.formCreation.get('UserPassword')?.value
    }
    console.log(this.loginData);
    //  this._service.postLoginData(this.loginData).subscribe(res=>{
    //   localStorage.setItem("User",JSON.stringify({token:res}));
    //   this._route.navigate(['/admin/Home']);

    this._service.postLoginData(this.loginData).subscribe((response) => {
      localStorage.setItem("token", Math.random().toString());
      this._route.navigate(['/admin/Home'])
    
   
    }, 
    (error) => {
      this.errorHandle=this.errMsg[error];
      
    })

  }

}
