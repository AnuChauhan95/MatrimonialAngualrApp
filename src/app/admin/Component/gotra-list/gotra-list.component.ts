import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GotraMasterComponent } from '../gotra-master/gotra-master.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Igotra } from '../../Models/igotra';
import { GotraServiceService } from '../../Service/gotra/gotra-service.service';

@Component({
  selector: 'app-gotra-list',
  templateUrl: './gotra-list.component.html',
  styleUrls: ['./gotra-list.component.css']
})
export class GotraListComponent implements OnInit {
 

  modalRef: any;
  gotraList: any[]=[];
  selectedGotra!:Igotra;

  constructor(private readonly _modalService: BsModalService, private readonly _gotraService: GotraServiceService) { }

  ngOnInit(): void {
    this.recieveGotra();
  }
  AddGotra(){
  this.openModal("Added Gotra");
  }

  openModal(title:string) {
    this.modalRef = this._modalService.show(GotraMasterComponent, {
      class: ('model-md'),
      initialState:{
        holdGotraModel:this.selectedGotra,
        title:title
      }
    });
    this.modalRef.content.event.subscribe((res:any)=>{
     this.recieveGotra();
    })
  }
  recieveGotra() {
    this.getGotra();
  }

  private getGotra() {
    this._gotraService.getGotraService().subscribe({
      next: ((res) => {
        this.gotraList = res;
        console.log(res);
      })
    })
  }

  deleteGotra(gotraId:Igotra){
    if(confirm("do you want to delete it")){
      this._gotraService.deleteGotraService(gotraId).subscribe(res=>{
        alert(res);
        this.recieveGotra();
      })
    }
  }


  updateGotra(gotras:Igotra){
    this.openModal("Update Gotra");
  this.selectedGotra=gotras;
  console.log(gotras);
  }
}
