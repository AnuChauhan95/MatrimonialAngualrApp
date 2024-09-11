import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Igotra } from '../../Models/igotra';
import { apiUrl } from '../../AllUrl/apiUrl';
import { httpOption } from '../../config/httpOption';

@Injectable({
  providedIn: 'root'
})
export class GotraServiceService {

 
  constructor(private readonly _http:HttpClient) { }

  getGotraService():Observable<Igotra[]>{
    return this._http.get<Igotra[]>(apiUrl.getGotraUrl).pipe(catchError(err=>{
      throw err;
    }))
  }

  getGotraByIdSer(subCasteID:Igotra):Observable<Igotra[]>{
    return this._http.get<Igotra[]>(apiUrl.getByIdGotraUrl+subCasteID).pipe(catchError(err=>{
      throw err;
    }))
  }

  postGotraService(req:Igotra):Observable<any>{
    return this._http.post(apiUrl.addGotraUrl,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }

  deleteGotraService(req:Igotra):Observable<any>{
    return this._http.delete(apiUrl.deleteGotraUrl+req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }

  updateGotraService(req:Igotra):Observable<any>{
    return this._http.put(apiUrl.updateGotraUrl,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
}
