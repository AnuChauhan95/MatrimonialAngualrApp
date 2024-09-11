import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DistrictsService } from '../../Service/district-service/districts.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IDistrict } from '../../Models/idistrict';
import { IState } from '../../Models/istate';
import { CountriesService } from '../../Service/country-service/countries.service';
import { StatesService } from '../../Service/state-service/states.service';

@Component({
  selector: 'app-district-master-list',
  templateUrl: './district-master-list.component.html',
  styleUrls: ['./district-master-list.component.css']
})
export class DistrictMasterListComponent implements OnInit {
  @Output() event: EventEmitter<string> = new EventEmitter<string>();

  formOfDistrict!: FormGroup;
  holdModelOfDistrict!: IDistrict;
  statesList: IState[] = [];
  title: string = "Added District";


  constructor(private _modalService: BsModalService, private readonly districtService: DistrictsService, private readonly _stateService: StatesService) { }

  ngOnInit(): void {
    console.log("Selected District", this.holdModelOfDistrict);
    this.postDistrictData();
    this.recieveCountry();
    this.setFormData();
  }
  cutTo() {
    this._modalService.hide();
  }

  postDistrictData() {
    this.formOfDistrict = new FormGroup({
      stateId: new FormControl(''),
      districtsName: new FormControl(''),
      status: new FormControl(true)
    })
  }

  saveDistrict() {

    //update data

    if (this.holdModelOfDistrict) {
      this.holdModelOfDistrict = {
        districtId: this.holdModelOfDistrict.districtId,
        stateId: this.formOfDistrict.get('stateId')?.value,
        districtName: this.formOfDistrict.get('districtsName')?.value,
        status: this.formOfDistrict.get('status')?.value

      }
      this.districtService.updateDistrictService(this.holdModelOfDistrict).subscribe(res => {
        alert(res);
        this.event.emit("updated Success Data of district");
        this.cutTo();
      })

    }
    // post data

    else {
      this.holdModelOfDistrict = {
        stateId: this.formOfDistrict.get('stateId')?.value,
        districtName: this.formOfDistrict.get('districtsName')?.value,
        status: this.formOfDistrict.get('status')?.value

      }
      this.districtService.postDistirctService(this.holdModelOfDistrict).subscribe(res => {
        alert(res);
        this.event.emit("posted Success Data of district");
        this.cutTo();
      })

    }

  }

  recieveCountry() {
    this.getStateList();
  }

  private getStateList() {
    this._stateService.getStateService().subscribe({
      next: (res) => {
        this.statesList = res;
      }
    })
  }

  setFormData() {
    if (this.holdModelOfDistrict) {
      this.title = this.title + "**" + this.holdModelOfDistrict.districtName

      this.formOfDistrict.patchValue({
        stateId: this.holdModelOfDistrict.stateId,
        districtsName: this.holdModelOfDistrict.districtName,
        status: this.holdModelOfDistrict.status
      })
    }

  }

}
