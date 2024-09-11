import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CountryMasterComponent } from './Component/country-master/country-master.component';
import { CountryMasterListComponent } from './Component/country-master-list/country-master-list.component';
import { HomeComponent } from './Component/home/home.component';
import { StateMasterComponent } from './Component/state-master/state-master.component';
import { StateMasterListComponent } from './Component/state-master-list/state-master-list.component';
import { DistrictMasterComponent } from './Component/district-master/district-master.component';
import { DistrictMasterListComponent } from './Component/district-master-list/district-master-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SubcasteMasterComponent } from './Component/subcaste-master/subcaste-master.component';
import { GotraMasterComponent } from './Component/gotra-master/gotra-master.component';
import { SubCasteListComponent } from './Component/sub-caste-list/sub-caste-list.component';
import { GotraListComponent } from './Component/gotra-list/gotra-list.component';
import { EnquiryMasterComponent } from './Component/enquiry-master/enquiry-master.component';
import { EnquiryMasterListComponent } from './Component/enquiry-master-list/enquiry-master-list.component';
import { EducationMasterComponent } from './Component/education-master/education-master.component';
import { EducationMasterListComponent } from './Component/education-master-list/education-master-list.component';

import { QualificationMasterComponent } from './Component/qualification-master/qualification-master.component';
import { QualificationMasterListComponent } from './Component/qualification-master-list/qualification-master-list.component';
import { ProfessionMasterComponent } from './Component/profession-master/profession-master.component';
import { ProfessionMasterListComponent } from './Component/profession-master-list/profession-master-list.component';
import { FilterPipe } from './FilterPipe/filter.pipe';
import { NewRegistrationMasterComponent } from './Component/new-registration-master/new-registration-master.component';
import { NewRegistrationMasterListComponent } from './Component/new-registration-master-list/new-registration-master-list.component';
import { LoginComponent } from './loginComponent/login/login.component';
import { ImageUploadComponent } from './shared/uploadFile/image-upload/image-upload.component';



@NgModule({
  declarations: [
    AdminComponent,
    CountryMasterComponent,
    CountryMasterListComponent,
    HomeComponent,
    StateMasterComponent,
    StateMasterListComponent,
    DistrictMasterComponent,
    DistrictMasterListComponent,
    SubcasteMasterComponent,
    GotraMasterComponent,
    SubCasteListComponent,
    GotraListComponent,
    EnquiryMasterComponent,
    EnquiryMasterListComponent,
    EducationMasterComponent,
    EducationMasterListComponent,
   
    QualificationMasterComponent,
    QualificationMasterListComponent,
    ProfessionMasterComponent,
    ProfessionMasterListComponent,
    FilterPipe,
    NewRegistrationMasterComponent,
    NewRegistrationMasterListComponent,
    LoginComponent,
    ImageUploadComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
   
    
    
  ]
})
export class AdminModule { }
