import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Igotra } from '../../Models/igotra';
import { GotraServiceService } from '../../Service/gotra/gotra-service.service';
import { SubCasteServiceService } from '../../Service/sub-caste/sub-caste-service.service';
import { IsubCaste } from '../../Models/isub-caste';

@Component({
  selector: 'app-gotra-master',
  templateUrl: './gotra-master.component.html',
  styleUrls: ['./gotra-master.component.css']
})
export class GotraMasterComponent implements OnInit{
  @Output() event:EventEmitter<string>=new EventEmitter<string>();
  formCreationGotra!:FormGroup;
  holdGotraModel!:Igotra;
  title:string="Added New Gotra";
  subCasttList:IsubCaste[]=[];

  constructor(private _modalService: BsModalService, private readonly _gotraService: GotraServiceService,private readonly _subCaste:SubCasteServiceService){}
  ngOnInit(): void {
    this.createGotra();
    this.reciveSubCaste();
    this.setGotra();
  }
  reciveSubCaste(){
    this.getSubCaste();
  }

  private getSubCaste(){
    this._subCaste.getSubCasteService().subscribe({
      next:((res)=>{
        this.subCasttList=res;
      })
    })
  }

  createGotra(){
    this.formCreationGotra=new FormGroup({
      subCateId:new FormControl('',Validators.required),
      gotraNames:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required),

    })
  }
 
  saveGotra(){

    if(this.holdGotraModel){
      this.holdGotraModel={
        gotraId:this.holdGotraModel.gotraId,
        subCasteId:this.formCreationGotra.get('subCateId')?.value,
        gortaName:this.formCreationGotra.get('gotraNames')?.value,
        status:this.formCreationGotra.get('status')?.value
      }
      this._gotraService.updateGotraService(this.holdGotraModel).subscribe(res=>{
        alert(res);
        this.event.emit("update Data Succes");
        this.cutTo();
      })
    }
    else{
      this.holdGotraModel={
        subCasteId:this.formCreationGotra.get('subCateId')?.value,
        gortaName:this.formCreationGotra.get('gotraNames')?.value,
        status:this.formCreationGotra.get('status')?.value
      }
      this._gotraService.postGotraService(this.holdGotraModel).subscribe(res=>{
        alert(res);
        this.event.emit("posted Data Succes");
        this.cutTo();
      })
    }
    

  }
  
  cutTo() {
    this._modalService.hide();
  } 

setGotra(){
if(this.holdGotraModel){
  this.title=this.title+"**"+this.holdGotraModel.gortaName
  this.formCreationGotra.patchValue({
    subCateId:this.holdGotraModel.subCasteId,
    gotraNames:this.holdGotraModel.gortaName,
    status:this.holdGotraModel.status
  })
}
}


}
