import { Component, OnInit } from '@angular/core';
import { IsubCaste } from '../../Models/isub-caste';
import { SubCasteServiceService } from '../../Service/sub-caste/sub-caste-service.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DistrictMasterComponent } from '../district-master/district-master.component';
import { SubcasteMasterComponent } from '../subcaste-master/subcaste-master.component';

@Component({
  selector: 'app-sub-caste-list',
  templateUrl: './sub-caste-list.component.html',
  styleUrls: ['./sub-caste-list.component.css']
})
export class SubCasteListComponent implements OnInit {
  SubCasteList: any[] = [];
  modalRef: any;
  selectedSubCaste!:IsubCaste;

  constructor(private readonly _subServcie: SubCasteServiceService, private _modalService: BsModalService) { }

  ngOnInit(): void {
    this.recieveSubCaste();
  }

  recieveSubCaste() {
    this.getSubCaste();
  }

  private getSubCaste() {
    this._subServcie.getSubCasteService().subscribe({
      next: (res) => {
        this.SubCasteList = res;
        console.log(res);
      }
    })
  }

  openModal() {
    this.modalRef = this._modalService.show(SubcasteMasterComponent, {
      class: ('model-md'),
      initialState:{
        holdModelOfSubCaste:this.selectedSubCaste
      }

    });
    this.modalRef.content.event.subscribe((res: any) => {
      this.recieveSubCaste();
    })

  }

  deleteSubCaste(subCasteId: IsubCaste) {
    if (confirm("do you want to delete it")) {
      this._subServcie.deleteSubCasteService(subCasteId).subscribe(res => {
        alert(res);
        this.recieveSubCaste();
      })
    }
  }


  updateSubCaste(subCastt: IsubCaste) {
    this.selectedSubCaste=subCastt;
    this.openModal();
    console.log(subCastt);

  }

}
