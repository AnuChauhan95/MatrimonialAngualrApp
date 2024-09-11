import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IRegistration } from 'src/app/login-models/iregistration';

@Injectable({
  providedIn: 'root'
})
export class RegServiceService implements OnInit {
  httpOption={
    headers:new HttpHeaders({
      'content-type':'application/json',
      'accept':'application/json'
    })
  }
  constructor(private readonly _http:HttpClient) { }
  ngOnInit(): void {
    
  }
addRegistrationService(req:IRegistration):Observable<any>{
  return this._http.post("https://localhost:7126/api/Authnitiction/AddRegistration",req,this.httpOption).pipe(catchError(err=>{
    throw err;
  }))
}

}
