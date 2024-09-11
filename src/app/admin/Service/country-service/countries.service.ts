import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ICountry } from '../../Models/icountry';
import { apiUrl } from '../../AllUrl/apiUrl';
import { httpOption } from '../../config/httpOption';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
 

  //getCountriesUrl="https://localhost:7075/api/Countries/GetAllDataOfCountryMaster";
  // postCountriesUrl="https://localhost:7075/api/Countries/AddedNewDataOfCountry";


  constructor(private readonly _http: HttpClient) { }

  getCountriesListService(): Observable<ICountry[]> {
    return this._http.get<ICountry[]>(apiUrl.getCountryUrl).pipe(catchError(err => {
      throw err;
    }));
  }

  postCountriesService(req:ICountry):Observable<any>{
    return this._http.post(apiUrl.addCountryUrl,req,httpOption).pipe(catchError(err=>{
      throw err;
    }))
  }

  deleteCountriesService(req:ICountry):Observable<any>{
    return this._http.delete(apiUrl.deleteCountryUrl+req,httpOption);
  }

  updateCountriesService(req:ICountry):Observable<any>{
    return this._http.put(apiUrl.updateCountryUrl,req,httpOption).pipe(catchError(err=>{
      throw err;
    }));
  }

}
