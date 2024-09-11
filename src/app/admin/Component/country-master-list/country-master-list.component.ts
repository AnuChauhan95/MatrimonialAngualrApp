import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CountriesService } from '../../Service/country-service/countries.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICountry } from '../../Models/icountry';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-country-master-list',
  templateUrl: './country-master-list.component.html',
  styleUrls: ['./country-master-list.component.css']
})
export class CountryMasterListComponent implements OnInit {
  //modalRef!: BsModalRef;
  @Output() event: EventEmitter<string> = new EventEmitter<string>();

  countriesCreation!: FormGroup;
  holdModel!: ICountry;
  title:string="Add Country Master";
  //submmited: boolean = false;

  constructor(private readonly _service: CountriesService, private _modalService: BsModalService) { }

  ngOnInit(): void {
    this.addCountry();

    this.setValueOfCountryData();


  }

  cutTo() {
    this._modalService.hide();
  }

  addCountry() {
    this.countriesCreation = new FormGroup({
      countryName: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
      

    })
  }

  countryData() {
    //this.submmited = true;

    if (this.holdModel) {
     
      this.holdModel = {
        countryId: this.holdModel.countryId,
        countryName: this.countriesCreation.get('countryName')?.value,
        status: this.countriesCreation.get('status')?.value
        

      }
      this._service.updateCountriesService(this.holdModel).subscribe(res => {
        //alert(res);
        
        this.event.emit("updated Sucees");
        this.cutTo();
        console.log(this.countriesCreation.value);
      })
    }
    else {
      
      this.holdModel = {
            
        countryName: this.countriesCreation.get('countryName')?.value,
        status: this.countriesCreation.get('status')?.value
       

      }
      this._service.postCountriesService(this.holdModel).subscribe(res => {
        alert(res);
        this.event.emit("posted Sucees");
        this.cutTo();
        
      })
    }
  }

  resetData(){
    this.countriesCreation.reset({
      countryName:'',
      status: ''
    })
  }


  setValueOfCountryData() {
    if (this.holdModel) {
      this.title=this.title+"**"+this.holdModel.countryName;
      this.countriesCreation.patchValue({
        countryName: this.holdModel.countryName,
        status: this.holdModel.status,
        createdBy: this.holdModel.createdBy
      })
    }
  }

}
