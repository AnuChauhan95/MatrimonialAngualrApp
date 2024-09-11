import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IQualification } from '../../Models/iqualification';
import { apiUrl } from '../../AllUrl/apiUrl';
import { httpOption } from '../../config/httpOption';

@Injectable({
  providedIn: 'root'
})
export class QualificationServiceService {
 

  constructor(private readonly _http:HttpClient) { }
  
  getQualificationSer():Observable<IQualification[]>{
    return this._http.get<IQualification[]>(apiUrl.getQualifUrl).pipe(catchError(err=>{
      throw err;
    }))
  }
  addQualificationSer(req:IQualification):Observable<any>{
    return this._http.post(apiUrl.addQualifUrl,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
  deleteQualificationSer(req:IQualification):Observable<any>{
    return this._http.delete(apiUrl.deleteQualifUrl+req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
  upDateQualificationSer(req:IQualification):Observable<any>{
    return this._http.put(apiUrl.uppdateQualifUrl,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
}
