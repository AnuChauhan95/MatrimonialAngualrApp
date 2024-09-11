import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-education-master',
  templateUrl: './education-master.component.html',
  styleUrls: ['./education-master.component.css']
})
export class EducationMasterComponent implements OnInit{
  
  constructor(private _modalService: BsModalService){}
  ngOnInit(): void {
    
  }
 
  
  
  cutTo() {
    this._modalService.hide();
  } 
  


}
