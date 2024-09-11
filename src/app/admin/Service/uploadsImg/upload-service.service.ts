import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(private readonly _http:HttpClient) { }

  addImageData(files:File[],profileId:any):Observable<any[]>{
    const formdata:FormData=new FormData();
    for(const file of files){
      formdata.append('files',file)
    }
    formdata.append('id',profileId)
    return this._http.post<any[]>("https://localhost:7075/api/Images/AddImage",formdata).pipe(catchError(err=>{
      throw err;
    }))

  }
 
}
