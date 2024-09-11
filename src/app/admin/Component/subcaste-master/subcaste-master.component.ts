import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { IsubCaste } from '../../Models/isub-caste';
import { SubCasteServiceService } from '../../Service/sub-caste/sub-caste-service.service';

@Component({
  selector: 'app-subcaste-master',
  templateUrl: './subcaste-master.component.html',
  styleUrls: ['./subcaste-master.component.css']
})
export class SubcasteMasterComponent implements OnInit {
@Output() event:EventEmitter<string>=new EventEmitter<string>();

  formCreationOfSubCaste!: FormGroup;
  holdModelOfSubCaste!: IsubCaste;

  constructor(private _modalService: BsModalService,private readonly _serviceSubCastte:SubCasteServiceService) { }
  ngOnInit(): void {
    this.createSubCaste();
    this.setDataOfSubCaste();
  }

  cutTo() {
    this._modalService.hide();
  }

  createSubCaste() {
    this.formCreationOfSubCaste = new FormGroup({
      subCastes: new FormControl(''),
      status: new FormControl(true),
    //  createddBy:new FormControl('')
    })
  }

  saveSubCaste() {
  if(this.holdModelOfSubCaste){
    this.holdModelOfSubCaste = {
      subCasteId:this.holdModelOfSubCaste.subCasteId,
      subCasteName: this.formCreationOfSubCaste.get('subCastes')?.value,
      status: this.formCreationOfSubCaste.get('status')?.value,
     // createdby: this.formCreationOfSubCaste.get('createddBy')?.value
    }
    this._serviceSubCastte.updateSubCasteService(this.holdModelOfSubCaste).subscribe(res=>{
      alert(res);
      this.event.emit("update data of sub caste successFully");
      this.cutTo();

    })

  }else{
    this.holdModelOfSubCaste = {
      subCasteName: this.formCreationOfSubCaste.get('subCastes')?.value,
      status: this.formCreationOfSubCaste.get('status')?.value,
      //createdby: this.formCreationOfSubCaste.get('createddBy')?.value
    }
    this._serviceSubCastte.addSubCasteService(this.holdModelOfSubCaste).subscribe(res=>{
      alert(res);
      this.event.emit("posted data of sub caste successFully");
      this.cutTo();

    })

  }

    

  }

  setDataOfSubCaste(){
    if(this.holdModelOfSubCaste){
      this.formCreationOfSubCaste.patchValue({
        subCastes:this.holdModelOfSubCaste.subCasteName,
        status:this.holdModelOfSubCaste.status,
        createddBy:this.holdModelOfSubCaste.createdby
      })
    }
  }
}
