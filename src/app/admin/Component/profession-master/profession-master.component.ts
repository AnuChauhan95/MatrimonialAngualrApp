import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { IProfession } from '../../Models/iprofession';
import { ProfessionService } from '../../Service/profession/profession.service';

@Component({
  selector: 'app-profession-master',
  templateUrl: './profession-master.component.html',
  styleUrls: ['./profession-master.component.css']
})
export class ProfessionMasterComponent implements OnInit {
  @Output() event: EventEmitter<string> = new EventEmitter<string>();
  formOfProfession!: FormGroup;
  holdModel!: IProfession;
  title:string="Add Profession";

  constructor(private readonly bsModelServices: BsModalService, private readonly _service: ProfessionService) { }
  ngOnInit(): void {
    this.addDataOfProfession();
    this.setValueOfProfession();
    
  }

  addDataOfProfession() {
    this.formOfProfession = new FormGroup({
      proName: new FormControl('',Validators.required),
      status: new FormControl('',Validators.required)
    })
  }

  saveProfession() {
    if(this.holdModel){
      this.holdModel = {
        professionId:this.holdModel.professionId,
        professionName: this.formOfProfession.get('proName')?.value,
        status: this.formOfProfession.get('status')?.value
      }
      this._service.updateProfessionService(this.holdModel).subscribe(res => {
        alert(res);
        this.event.emit("update SuccesFully Profession");
        this.closePopup();
      })
    }
    else{
      this.holdModel = {
        professionName: this.formOfProfession.get('proName')?.value,
        status: this.formOfProfession.get('status')?.value
      }
      this._service.postProfessionService(this.holdModel).subscribe(res => {
        alert(res);
        this.event.emit("Added SuccesFully Profession");
        this.closePopup();
      })
    }
 

  }

  closePopup() {
    this.bsModelServices.hide();
  }

  setValueOfProfession(){
    if(this.holdModel){
      this.title=this.title+"**"+this.holdModel.professionName
      this.formOfProfession.patchValue({
        proName:this.holdModel.professionName,
        status:this.holdModel.status

      })
    }
  }

}
