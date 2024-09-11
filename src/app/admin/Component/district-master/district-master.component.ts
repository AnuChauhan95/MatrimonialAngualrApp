import { Component, OnInit } from '@angular/core';
import { IDistrict } from '../../Models/idistrict';
import { DistrictsService } from '../../Service/district-service/districts.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DistrictMasterListComponent } from '../district-master-list/district-master-list.component';

@Component({
  selector: 'app-district-master',
  templateUrl: './district-master.component.html',
  styleUrls: ['./district-master.component.css']
})
export class DistrictMasterComponent implements OnInit{

  districtList:any[]=[];
  modalRef!: BsModalRef;
selectedDistrict!:IDistrict;

  constructor(private readonly _districtServcie:DistrictsService,private _modalService: BsModalService){}

  ngOnInit(): void {
    
    this.receiveDistrict();
  }
  AddModel(){
  this.openModal("Added District");
  }
  openModal(title:string){
    this.modalRef=this._modalService.show(DistrictMasterListComponent,{
      class:('model-md'),
      initialState:{
        holdModelOfDistrict:this.selectedDistrict,
        title:title
      }
    });

    this.modalRef.content.event.subscribe((res:any)=>{
      this.receiveDistrict();
    })
    }


    /*Get District Method */
receiveDistrict(){
  this.getDistrictData();
  console.log(this.getDistrictData());
}

  private getDistrictData(){
    this._districtServcie.getDistrictService().subscribe({
      next:(response)=>{
        this.districtList=response;
        console.log(response);
      }
    })
  }
/*Delete District Method */

  deleteDistricts(districtId:IDistrict){
    if(confirm("do you want to delete it")){
      this._districtServcie.deleteDistrictService(districtId).subscribe(res=>{
        alert(res);
        this.receiveDistrict();
       })
    }
 
  }
 /*Update District Method */

  updateData(districts:IDistrict)
  {
    this.selectedDistrict=districts;
    this.openModal("Update Data");
    console.log(districts);
  }

}
