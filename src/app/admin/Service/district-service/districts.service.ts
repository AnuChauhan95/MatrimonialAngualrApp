import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IDistrict } from '../../Models/idistrict';
import { apiUrl } from '../../AllUrl/apiUrl';
import { httpOption } from '../../config/httpOption';

@Injectable({
  providedIn: 'root'
})
export class DistrictsService {
 

  constructor(private readonly _http:HttpClient) { }

  getDistrictService():Observable<IDistrict[]>{
    return this._http.get<IDistrict[]>(apiUrl.getDistrictUrl).pipe(catchError(err=>{
      throw err;
    }))
  }
  getDistrictByIdService(stateId:IDistrict):Observable<IDistrict[]>{
    return this._http.get<IDistrict[]>(apiUrl.getByIdDistrictUrl+stateId).pipe(catchError(err=>{
      throw err;
    }))
  }

  postDistirctService(req:IDistrict):Observable<any>{
  return this._http.post( apiUrl.addDistrictUrl,req,httpOption).pipe(catchError(err=>{
    throw err;
  }));
  }

  deleteDistrictService(req:IDistrict):Observable<any>{
    return this._http.delete(apiUrl.deleteDistrictUrl+req,httpOption).pipe(catchError(err=>{
  throw err;
    }));
  }

  updateDistrictService(req:IDistrict):Observable<any>{
    return this._http.put(apiUrl.updateDistrictUrl,req,httpOption).pipe(catchError(err=>{
      throw err;
    }));
  }
}
