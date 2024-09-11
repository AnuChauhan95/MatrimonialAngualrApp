import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadsService implements OnInit {
  httpOption={
    headers:new HttpHeaders({
      'content-type':'application/json',
      'accept':'application/json'
    })
  }
  constructor(private readonly _http:HttpClient) { }
  ngOnInit(): void {
    
  }

  uploadService(files:File[]):Observable<any[]>{
    const formData:FormData=new FormData();
    for(const file of files){
        formData.append('file',file,file.name)
        return this._http.post<any[]>("https://localhost:7075/api/Images/AddImage",formData,this.httpOption);
    }
  }
}
