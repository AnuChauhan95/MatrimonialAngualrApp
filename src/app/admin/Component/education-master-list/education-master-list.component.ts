import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { EducationMasterComponent } from '../education-master/education-master.component';

@Component({
  selector: 'app-education-master-list',
  templateUrl: './education-master-list.component.html',
  styleUrls: ['./education-master-list.component.css']
})
export class EducationMasterListComponent {


  modalRef:any;
  constructor(private readonly _modalService:BsModalService){}


  openModal() {
    this.modalRef = this._modalService.show(EducationMasterComponent, {
      class: ('model-md')
    });
    

  }
}
