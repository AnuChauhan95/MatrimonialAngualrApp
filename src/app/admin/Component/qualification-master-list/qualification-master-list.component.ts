import { Component, OnInit } from '@angular/core';
import { IQualification } from '../../Models/iqualification';
import { QualificationServiceService } from '../../Service/qualificated/qualification-service.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { QualificationMasterComponent } from '../qualification-master/qualification-master.component';

@Component({
  selector: 'app-qualification-master-list',
  templateUrl: './qualification-master-list.component.html',
  styleUrls: ['./qualification-master-list.component.css']
})
export class QualificationMasterListComponent implements OnInit {
  qualificatedList: any[] = [];
  modelRef!: BsModalRef;
  selectQualification!:IQualification;

  constructor(private readonly _service: QualificationServiceService, private readonly _bsModelService: BsModalService) { }

  ngOnInit(): void {
    this.recieveQualification();
  }
  recieveQualification() {
    this.getQualification();
  }
  private getQualification() {
    this._service.getQualificationSer().subscribe({
      next: ((response) => {
        this.qualificatedList = response;
        console.log(response);

      }),
      error: (e) => console.error(e)
    })
  }
  addQualication(){
    this.openModal("Add Qualification");
  }

  openModal(title:any) {
    this._bsModelService.show(QualificationMasterComponent, {
      class: ("model-md"),
      initialState:{
        holdQualification:this.selectQualification,
        title:title
      }
    })
    this.modelRef.content.event().subscribe((res: any) => {
      this.recieveQualification();
    })
  }
  trashQualification(qualificationId: IQualification) {
    if (confirm("do you want to deleteQualification")) {
      this._service.deleteQualificationSer(qualificationId).subscribe(res => {
        alert(res);
        this.recieveQualification();
      })
    }
  }
  editQulaification(qualificate: IQualification) {
    this.selectQualification=qualificate;
    
    this.openModal("Update Qualifiction");
    console.log(qualificate);
  }
}
