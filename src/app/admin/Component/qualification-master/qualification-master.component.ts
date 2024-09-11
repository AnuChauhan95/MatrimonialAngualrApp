import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { QualificationServiceService } from '../../Service/qualificated/qualification-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IQualification } from '../../Models/iqualification';

@Component({
  selector: 'app-qualification-master',
  templateUrl: './qualification-master.component.html',
  styleUrls: ['./qualification-master.component.css']
})
export class QualificationMasterComponent implements OnInit {
  @Output() event: EventEmitter<string> = new EventEmitter<string>();
  title:string='Add Qualification';
  formOfQualification!: FormGroup;
  holdQualification!: IQualification;

  constructor(private readonly _bsService: BsModalService, private readonly _service: QualificationServiceService) { }
  ngOnInit(): void {
    this.addQualification();
    this.setQualification();
  }
  addQualification() {
    this.formOfQualification = new FormGroup({
      qualificateName: new FormControl(''),
      status: new FormControl('')
    })
  }
  saveQualification() {
    if (this.holdQualification) {
      this.holdQualification = {
        qualificationId:this.holdQualification.qualificationId,
        qualificationName: this.formOfQualification.get('qualificateName')?.value,
        status: this.formOfQualification.get('status')?.value
      }
      this._service.upDateQualificationSer(this.holdQualification).subscribe(res => {
        alert(res);
        this.event.emit("updated SuccessFully");
        this.closePopup();
      })
    } 
    else{
      this.holdQualification = {
        qualificationName: this.formOfQualification.get('qualificateName')?.value,
        status: this.formOfQualification.get('status')?.value
      }
      this._service.addQualificationSer(this.holdQualification).subscribe(res => {
        alert(res);
        this.event.emit("Added SuccessFully");
        this.closePopup();
      })
    }
    
  }
  closePopup() {
    this._bsService.hide();
  }

  setQualification() {
    if (this.holdQualification) {
      this.title=this.title+"**"+this.holdQualification.qualificationName,
      this.formOfQualification.patchValue({
        
        qualificateName: this.holdQualification.qualificationName,
        status: this.holdQualification.status
      })
    }
  }

}
