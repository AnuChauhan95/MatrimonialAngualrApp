import { Component, OnInit } from '@angular/core';
import { IRegistration } from '../../Models/iregistration';
import { NewRegistrationService } from '../../Service/regisration/new-registration.service';

@Component({
  selector: 'app-new-registration-master-list',
  templateUrl: './new-registration-master-list.component.html',
  styleUrls: ['./new-registration-master-list.component.css']
})
export class NewRegistrationMasterListComponent  implements OnInit{

  newRegistr:any[]=[];
  
  constructor(private readonly _ser:NewRegistrationService){}
  ngOnInit(): void {
    this.getData();
   
  }

  getData(){
    this._ser.getAllData().subscribe(response=>{
      
      this.newRegistr=response;
    
    })
  }

 
 
}
