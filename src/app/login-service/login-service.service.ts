import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../login-models/ilogin';
import { Observable, catchError } from 'rxjs';
import { ErrorHandleServiceService } from '../error-serve/error-handle-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  httpOption={
    headers:new HttpHeaders({
      'content-type':'application/json',
      'accept':'application/json'
    })
  }
  constructor(private readonly _http:HttpClient,private readonly _errSer:ErrorHandleServiceService) { }

  postLoginData(req:ILogin):Observable<any>{
    return this._http.post("https://localhost:7075/api/User/AddLoginData",req,this.httpOption).pipe(catchError(err=>{
      return this._errSer.handleError(err);
    }))
  }


}
