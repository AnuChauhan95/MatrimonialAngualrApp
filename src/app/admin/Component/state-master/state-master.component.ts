import { Component, OnInit } from '@angular/core';
import { CountryMasterListComponent } from '../country-master-list/country-master-list.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { StateMasterListComponent } from '../state-master-list/state-master-list.component';
import { IState } from '../../Models/istate';
import { StatesService } from '../../Service/state-service/states.service';

@Component({
  selector: 'app-state-master',
  templateUrl: './state-master.component.html',
  styleUrls: ['./state-master.component.css']
})
export class StateMasterComponent implements OnInit{
 
  modalRef!: BsModalRef;
  stateList:any[]=[];
  selectedState!:IState;
  


  constructor(private _modalService: BsModalService,private readonly _service:StatesService){}

  ngOnInit(): void {
    this.recieveStates();
  }
  AddState(){
    this.openModal("Add State");
  }
  openModal(title:string){
    this.modalRef=this._modalService.show(StateMasterListComponent,
      {
        initialState:{
          stateList:this.selectedState,
          title:title

        }
      }
      
  );
    this.modalRef.content.event.subscribe((res:any)=>{
      this.recieveStates();
    })
    }

    recieveStates(){
      this.getStatesData();
    }

    private getStatesData(){
      this._service.getStateService().subscribe({
        next:(response)=>{
          this.stateList=response;
          console.log(response);
        }
      })
    }

    deleteStateById(stateId:IState){
      if(confirm("do you want to delete this state")){
        this._service.deleteStateService(stateId).subscribe(res=>{
          alert(res);
          this.recieveStates();
        })
      }
    }


    updateStateData(state:IState){
      
      this.selectedState=state;
      this.openModal("Edit State");
      console.log(state);
    }
}
