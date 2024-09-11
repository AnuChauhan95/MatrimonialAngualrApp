import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IState } from '../../Models/istate';
import { apiUrl } from '../../AllUrl/apiUrl';
import { httpOption } from '../../config/httpOption';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
 

  constructor(private readonly _http:HttpClient) { }

  getStateService():Observable<IState[]>{
    return this._http.get<IState[]>(apiUrl.getStateUrl).pipe(catchError(err=>{
      throw err;
    }))
  }
  getStateByIdService(countryId:IState):Observable<IState[]>{
    return this._http.get<IState[]>(apiUrl.getByIdStateUrl+countryId).pipe(catchError(err=>{
      throw err;
    }))
  }

  postStateService(req:IState):Observable<any>{
    return this._http.post(apiUrl.addStateUrl,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }

  deleteStateService(req:IState):Observable<any>{
    return this._http.delete(apiUrl.deleteStateUrl+req,httpOption).pipe(catchError(err=>{
      throw err;
    }));
  }


  updateStateService(req:IState):Observable<any>{
    return this._http.put(apiUrl.updateStateUrl,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }

}
