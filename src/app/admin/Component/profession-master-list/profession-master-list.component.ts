import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProfessionMasterComponent } from '../profession-master/profession-master.component';
import { IProfession } from '../../Models/iprofession';
import { ProfessionService } from '../../Service/profession/profession.service';

@Component({
  selector: 'app-profession-master-list',
  templateUrl: './profession-master-list.component.html',
  styleUrls: ['./profession-master-list.component.css']
})
export class ProfessionMasterListComponent implements OnInit {
 
selectProfession!:IProfession;
  bsModelRef!: BsModalRef
  proList: any[] = [];

  constructor(private readonly bsModelRefServices: BsModalService, private readonly _service: ProfessionService) { }

  ngOnInit(): void {
    this.recieveProfession();
  }
  recieveProfession() {
    this.getProfession();
  }
  private getProfession() {
    this._service.getProfessionService().subscribe({
      next: ((response => {
        this.proList = response;
        console.log(response);
      }))
    })
  }
  addProfession(){
    this.openModal("Add Profession");
  }
  openModal(title:any) {
    this.bsModelRefServices.show(ProfessionMasterComponent, {
      class: ("modal-md"),
      initialState:{
        holdModel:this.selectProfession,
        title:title
      }
      

    })
    this.bsModelRef.content.event().subscribe((res:any)=>{
      this.recieveProfession();
    })
  }

  deleteProfession(professionId: IProfession) {
    if (confirm("do you want to delete profession")) {
      this._service.deleteProfessionService(professionId).subscribe(res => {
        alert(res);
        this.recieveProfession();
      })
    }
  }

  editProfession(proItem:IProfession){
  this.selectProfession=proItem;

    console.log(proItem);
    this.openModal("Update Profession");
  }
}
