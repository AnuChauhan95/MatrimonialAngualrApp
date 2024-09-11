import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IsubCaste } from '../../Models/isub-caste';
import { Igotra } from '../../Models/igotra';
import { ICountry } from '../../Models/icountry';
import { IQualification } from '../../Models/iqualification';
import { IState } from '../../Models/istate';
import { IProfession } from '../../Models/iprofession';
import { NewRegistrationService } from '../../Service/regisration/new-registration.service';
import { IDistrict } from '../../Models/idistrict';
import { SubCasteServiceService } from '../../Service/sub-caste/sub-caste-service.service';
import { GotraServiceService } from '../../Service/gotra/gotra-service.service';
import { CountriesService } from '../../Service/country-service/countries.service';
import { StatesService } from '../../Service/state-service/states.service';
import { DistrictsService } from '../../Service/district-service/districts.service';
import { ProfessionService } from '../../Service/profession/profession.service';
import { QualificationServiceService } from '../../Service/qualificated/qualification-service.service';
import { IRegistration } from '../../Models/iregistration';
import { UploadServiceService } from '../../Service/uploadsImg/upload-service.service';

@Component({
  selector: 'app-new-registration-master',
  templateUrl: './new-registration-master.component.html',
  styleUrls: ['./new-registration-master.component.css']
})
export class NewRegistrationMasterComponent implements OnInit {
  creationForm!: FormGroup;

  holdRegistrationModel!: any;

  selectFile: File[] = [];
  subCasteList: IsubCaste[] = [];
  gotraList: Igotra[] = [];
  countryList: ICountry[] = [];
  qualificationList: IQualification[] = [];
  stateList: IState[] = [];
  districtList: IDistrict[] = [];
  professionList: IProfession[] = [];
  maritalLists = [
    { id: 1, maritalStatus: 'Married' },
    { id: 2, maritalStatus: 'Unmarried' },
    { id: 3, maritalStatus: 'Divorced' },
    { id: 4, maritalStatus: 'Agreement' }

  ];
  casteList = [
    { casteId: 1, casteName: 'General' },
    { casteId: 2, casteName: 'Obc' },
    { casteId: 3, casteName: 'SC' },
    { casteId: 4, casteName: 'ST' }
  ]


  constructor(private readonly _newRegistr: NewRegistrationService, private readonly _subCasteSer: SubCasteServiceService,

    private readonly _gotraService: GotraServiceService, private readonly _countryServcie: CountriesService,
    private readonly _stateService: StatesService, private readonly _districtSer: DistrictsService,
    private readonly _professionSer: ProfessionService, private readonly _qualificatiomList: QualificationServiceService
    , private readonly _imageService: UploadServiceService) { }


  ngOnInit(): void {

    this.registration();
    this.getCountry();
    this.getQualification();
    this.getProfeesion();
    this.getSubCasteData();

  }

  registration() {
    this.creationForm = new FormGroup({
      proId: new FormControl(''),
      locationData: new FormControl(''),
      religionData: new FormControl(''),
      age: new FormControl(''),
      maritalState: new FormControl(''),
      height: new FormControl(''),
      castees: new FormControl(''),
      comlexionOfBody: new FormControl(''),
      subCaste: new FormControl(''),
      villageLocation: new FormControl(''),
      gotraDetails: new FormControl(''),
      countrydata: new FormControl(''),
      qualification: new FormControl(''),
      stateInformation: new FormControl(''),
      professionData: new FormControl(''),
      districtItem: new FormControl(''),
      imageFirst:new FormControl(''),
      imageSecond:new FormControl(''),
      imageThird:new FormControl('')

    })
  }

  saveRegistr() {
    this.holdRegistrationModel={
      profileID:this.creationForm.get('0')?.value,
      location:this.creationForm.get('locationData')?.value,
      religion:this.creationForm.get('religionData')?.value,
      age:this.creationForm.get('age')?.value,
      maritalStatus:this.creationForm.get('maritalState')?.value,
      height:this.creationForm.get('height')?.value,
      caste:this.creationForm.get('castees')?.value,
      complexion:this.creationForm.get('comlexionOfBody')?.value,
      subCasteId:this.creationForm.get('subCaste')?.value,
      homeLocation:this.creationForm.get('villageLocation')?.value,
      gotraId:this.creationForm.get('gotraDetails')?.value,
      countryId:this.creationForm.get('countrydata')?.value,
      qualificationId:this.creationForm.get('qualification')?.value,
      stateId:this.creationForm.get('stateInformation')?.value,
      professionId:this.creationForm.get('professionData')?.value,
      districtId:this.creationForm.get('districtItem')?.value,
      image1: this.creationForm.get('imageFirst')?.value,
      image2:this.creationForm.get('imageSecond')?.value ,
      image3:this.creationForm.get('imageThird')?.value

    }
    this._newRegistr.postNewRegistration(this.holdRegistrationModel).subscribe(res=>{
     const profileId=res.profileID;

      this._imageService.addImageData(this.selectFile, profileId).subscribe(res => {
              alert('Image Added SuccessFully');
            })
    })
    console.log(this.creationForm.value);
    console.log(this.creationForm.valid);
  }

  

  onSaveRegistar(event: any): void {
    this.selectFile.push(event.target.value[0]);
  }


  getCountry() {
    this._countryServcie.getCountriesListService().subscribe(res => {
      this.countryList = res;
    })
  }

  getByIdToState(event: any) {
    let countryId = event.target.value;
    this._stateService.getStateByIdService(countryId).subscribe(res => {
      this.stateList = res;
    })
  }

  getByIdDistrict(event: any) {
    let stateId = event.target.value;
    this._districtSer.getDistrictByIdService(stateId).subscribe(res => {
      this.districtList = res;
    })
  }

  getCaste(event: any) {

  }

  getSubCasteData() {
    this._subCasteSer.getSubCasteService().subscribe({
      next: (data) => {
        this.subCasteList = data;
      }
    })
  }

  getGotraData(event: any) {
    let subCasteID = event.target.value;
    this._gotraService.getGotraByIdSer(subCasteID).subscribe({
      next: (data) => {
        this.gotraList = data;
      }
    })
  }

  getQualification() {
    this._qualificatiomList.getQualificationSer().subscribe(res => {
      this.qualificationList = res;
    })
  }

  getProfeesion() {
    this._professionSer.getProfessionService().subscribe(res => {
      this.professionList = res;
    })
  }


}
