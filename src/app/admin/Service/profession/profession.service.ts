import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IProfession } from '../../Models/iprofession';
import { apiUrl } from '../../AllUrl/apiUrl';
import { httpOption } from '../../config/httpOption';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

 

  constructor(private readonly _http:HttpClient) { }
  getProfessionService():Observable<IProfession[]>{
    return this._http.get<IProfession[]>(apiUrl.getProfessionUrl).pipe(catchError(err=>{
      throw err;
    }))
  }
  postProfessionService(req:IProfession):Observable<any>{
   return this._http.post(apiUrl.addProfessionUrl,req,httpOption).pipe(catchError(err=>{
    throw err;
   }));
  }

  deleteProfessionService(req:IProfession):Observable<any>{
    return this._http.delete(apiUrl.deleteProfessionUrl+req,httpOption).pipe(catchError(err=>{
      throw err;
    }));
  }

  updateProfessionService(req:IProfession):Observable<any>{
    return this._http.put(apiUrl.updateProfessionUrl,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
}
