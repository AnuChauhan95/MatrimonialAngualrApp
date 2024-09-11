import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IsubCaste } from '../../Models/isub-caste';
import { apiUrl } from '../../AllUrl/apiUrl';
import { httpOption } from '../../config/httpOption';

@Injectable({
  providedIn: 'root'
})
export class SubCasteServiceService {
  
  constructor(private readonly _http:HttpClient) { }

  getSubCasteService():Observable<IsubCaste[]>{
    return this._http.get<IsubCaste[]>(apiUrl.getSubCasteUrl).pipe(catchError(err=>{
      throw err;
    }))
  }

  addSubCasteService(req:IsubCaste):Observable<any>{
    return this._http.post(apiUrl.addSubCasteUrl,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }

  deleteSubCasteService(req:IsubCaste):Observable<any>{
    return this._http.delete(apiUrl.deleteSubCasteUrl+req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }

  updateSubCasteService(req:IsubCaste):Observable<any>{
    return this._http.put(apiUrl.updateSubCasteUrl,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }
}
