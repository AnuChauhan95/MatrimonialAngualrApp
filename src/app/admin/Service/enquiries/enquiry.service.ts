import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEnquiry } from '../../Models/ienquiry';
import { Observable, catchError } from 'rxjs';
import { apiUrl } from '../../AllUrl/apiUrl';
import { httpOption } from '../../config/httpOption';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

 

  constructor(private readonly _http:HttpClient) { }
  getEnquiryService():Observable<IEnquiry[]>{
    return this._http.get<IEnquiry[]>(apiUrl.getEnquriesUrl).pipe(catchError(err=>{
      throw err;
    }))
  }
  postEnquiryService(req:IEnquiry):Observable<any>{
   return this._http.post(apiUrl.addEnquriesUrl,req,httpOption).pipe(catchError(err=>{
    throw err;
   }));
  }

  deleteEnquiryService(req:IEnquiry):Observable<any>{
    return this._http.delete(apiUrl.deleteEnquariesUrl+req,httpOption).pipe(catchError(err=>{
      throw err;
    }));
  }

  // updateEnquiryService(req:IEnquiry):Observable<any>{
  //   return this._http.put("",req,this.httpOption).pipe(catchError(err=>{
  //     throw err;
  //   }))
  // }
}
