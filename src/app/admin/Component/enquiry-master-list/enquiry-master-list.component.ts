import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EnquiryMasterComponent } from '../enquiry-master/enquiry-master.component';
import { IEnquiry } from '../../Models/ienquiry';
import { EnquiryService } from '../../Service/enquiries/enquiry.service';

@Component({
  selector: 'app-enquiry-master-list',
  templateUrl: './enquiry-master-list.component.html',
  styleUrls: ['./enquiry-master-list.component.css']
})
export class EnquiryMasterListComponent implements OnInit {
  EnquireList:any[]=[];
  selectedEnquire!:IEnquiry;
  modelRef!:BsModalRef;

  modalRef:any;
  constructor(private readonly _modalService:BsModalService,private readonly _service:EnquiryService){}

  ngOnInit(): void {
    this.receviceEnquiry();
  }

receviceEnquiry(){
 this.getDataOfEnquiry();
}

private getDataOfEnquiry(){
  this._service.getEnquiryService().subscribe({
    next:((response)=>{
      this.EnquireList=response;
      console.log(response);
    })
  })
}

  openModal() {
    this.modalRef = this._modalService.show(EnquiryMasterComponent, {
      class: ('model-md'),
      initialState:{
        holdEnquire:this.selectedEnquire
      }
      
    });
    this.modalRef.content.event.subscribe((res:any)=>{
      this.receviceEnquiry;
    })

  }

  deleteEnquie(enquiryId:IEnquiry){
   if(confirm("do you want to delete it")){
      this._service.deleteEnquiryService(enquiryId).subscribe(res=>{
        alert(res);
        this.receviceEnquiry();
      })
   }
  }

  edit(enquire:IEnquiry){
   console.log(enquire);
   this.openModal();
   
  }

}
