import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { IEnquiry } from '../../Models/ienquiry';
import { EnquiryService } from '../../Service/enquiries/enquiry.service';

@Component({
  selector: 'app-enquiry-master',
  templateUrl: './enquiry-master.component.html',
  styleUrls: ['./enquiry-master.component.css']
})
export class EnquiryMasterComponent implements OnInit {
  formEnquires!:FormGroup;
  holdEnquire!:IEnquiry;
@Output() event:EventEmitter<string>=new EventEmitter<string>();


  constructor(private _modalService: BsModalService,private readonly _service:EnquiryService){}

  ngOnInit(): void {
    this.createEnquire();
  }

  createEnquire(){
    this.formEnquires=new FormGroup({
      enquireName:new FormControl('',Validators.required),
      mobileNo:new FormControl('',Validators.required),
      emailId:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      doB:new FormControl('',Validators.required),
      enquireFor:new FormControl('',Validators.required),
      status:new FormControl('')
      
    })

  }
 
  saveEnquires(){
  this.holdEnquire={
    name:this.formEnquires.get('enquireName')?.value,
    phoneNo:this.formEnquires.get('mobileNo')?.value,
    email:this.formEnquires.get('emailId')?.value,
    gender:this.formEnquires.get('gender')?.value,
    dob:this.formEnquires.get('doB')?.value,
    enquiyFor:this.formEnquires.get('enquireFor')?.value,
    status:this.formEnquires.get('status')?.value
    
  }
  this._service.postEnquiryService(this.holdEnquire).subscribe(res=>{
    alert(res);
    this.event.emit("Added SuccessFully");
    this.cutTo();
  })
  }
  
  cutTo() {
    this._modalService.hide();
  } 

  setForm(){
    if(this.holdEnquire){
      this.formEnquires.patchValue({
        enquireName:this.holdEnquire.name,
        mobileNo:this.holdEnquire.phoneNo,
        emailId:this.holdEnquire.email,
        gen:this.holdEnquire.gender,
        doB:this.holdEnquire.dob,
        enquireFor:this.holdEnquire.enquiyFor,
        status:this.holdEnquire.status
      })
    }
  }
}
