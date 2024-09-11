import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IEducation } from '../../Models/ieducation';

@Injectable({
  providedIn: 'root'
})
export class EducationsService {
  httpOption={
    headers:new HttpHeaders({
      'content-type':'application/json',
      'accept':'application/json'
    })
  }

  constructor(private readonly _http:HttpClient) { }
  getEducationService():Observable<IEducation[]>{
    return this._http.get<IEducation[]>("https://localhost:7075/api/Education/GetEducationMasterData").pipe(catchError(err=>{
      throw err;
    }))
  }
  postEducationService(req:IEducation):Observable<any>{
   return this._http.post("https://localhost:7075/api/Education/AddedDataOfEducationMaster",req,this.httpOption).pipe(catchError(err=>{
    throw err;
   }));
  }

  deleteEducationService(req:IEducation):Observable<any>{
    return this._http.delete("https://localhost:7075/api/Education/DeleteDataOfEducationMaster?id="+req,this.httpOption).pipe(catchError(err=>{
      throw err;
    }));
  }

  // updateEducationService(req:IEducation):Observable<any>{
  //   return this._http.put("",req,this.httpOption).pipe(catchError(err=>{
  //     throw err;
  //   }))
  // }
}
