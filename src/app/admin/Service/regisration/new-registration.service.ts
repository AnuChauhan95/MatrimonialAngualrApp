import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegistration } from '../../Models/iregistration';
import { apiUrl } from '../../AllUrl/apiUrl';
import { httpOption } from '../../config/httpOption';

@Injectable({
  providedIn: 'root'
})
export class NewRegistrationService {
 
  constructor(private readonly _http:HttpClient) { }

  getNewRegistrtion():Observable<IRegistration[]>{
    return this._http.get<IRegistration[]>(apiUrl.getNewRegistratinUrl);
  }

  getAllData():Observable<any[]>{
    return this._http.get<any[]>(apiUrl.getAll);
  }

  postNewRegistration(req:IRegistration):Observable<any>{
    return this._http.post(apiUrl.addNewRegistrtionUrl,req,httpOption);
  }

  deleteNewNewRegistration(req:IRegistration):Observable<any>{
    return this._http.delete(apiUrl.deleteNewRegistrtionUrl+req,httpOption);
     
  }

 

}
