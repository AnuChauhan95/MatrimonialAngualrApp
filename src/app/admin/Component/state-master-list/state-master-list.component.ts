import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountriesService } from '../../Service/country-service/countries.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup } from '@angular/forms';
import { ICountry } from '../../Models/icountry';
import { IState } from '../../Models/istate';
import { StatesService } from '../../Service/state-service/states.service';

@Component({
  selector: 'app-state-master-list',
  templateUrl: './state-master-list.component.html',
  styleUrls: ['./state-master-list.component.css']
})
export class StateMasterListComponent  implements OnInit{
  @Output() event:EventEmitter<string>=new EventEmitter<string>();

  stateCreation!:FormGroup;
  countryLi:ICountry[]=[];
  stateList!:IState;
  title:string="Add State";

  constructor(private readonly _service: CountriesService, private readonly _stateService:StatesService,private _modalService: BsModalService) { }
  

  ngOnInit(): void {
 this.reciveDataOfCountry();
 this.initStateFormCreate();
 this.setValueInFormForEditState();
  }

  cutTo() {
    this._modalService.hide();
  }

  reciveDataOfCountry(){
    this.getCountry();
  }
  private getCountry(){
    this._service.getCountriesListService().subscribe({
      next:(res)=>{
        this.countryLi=res;
        console.log(res);
      }
    })
  }

initStateFormCreate(){
  this.stateCreation=new FormGroup({
    countryId:new FormControl('0'),
    statName:new FormControl(''),
    status:new FormControl(true)

  })
}

  saveState(){
    if(this.stateList){
      this.stateList={
        stateId:this.stateList.stateId,
        countryId:this.stateCreation.get('countryId')?.value,
        stateName:this.stateCreation.get('statName')?.value,
        status:this.stateCreation.get('status')?.value,
        createdBy:"Amrit"
      }
      this._stateService.updateStateService(this.stateList).subscribe(res=>{
        alert(res);
        this.event.emit("updated states success");
        this.cutTo();
      })
    }
    else{
      this.stateList={
        countryId:this.stateCreation.get('countryId')?.value,
        stateName:this.stateCreation.get('statName')?.value,
        status:this.stateCreation.get('status')?.value,
        createdBy:"Amrit"
      }
      this._stateService.postStateService(this.stateList).subscribe(res=>{
        alert(res);
        this.event.emit("posted states success");
        this.cutTo();
      })
    }
    
    

  }


  setValueInFormForEditState(){
    if(this.stateList){
      this.title=this.title+"**"+this.stateList.stateName
      this.stateCreation.patchValue({
        countryId:this.stateList.countryId,
        statName:this.stateList.stateName,
        status:this.stateList.status
        
      })
    }
  }
}
