import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CountryMasterComponent } from './Component/country-master/country-master.component';
import { HomeComponent } from './Component/home/home.component';
import { StateMasterListComponent } from './Component/state-master-list/state-master-list.component';
import { StateMasterComponent } from './Component/state-master/state-master.component';
import { DistrictMasterComponent } from './Component/district-master/district-master.component';
import { SubCasteListComponent } from './Component/sub-caste-list/sub-caste-list.component';
import { GotraListComponent } from './Component/gotra-list/gotra-list.component';

import { EnquiryMasterListComponent } from './Component/enquiry-master-list/enquiry-master-list.component';
import { EducationMasterListComponent } from './Component/education-master-list/education-master-list.component';
import { ProfessionMasterListComponent } from './Component/profession-master-list/profession-master-list.component';
import { QualificationMasterListComponent } from './Component/qualification-master-list/qualification-master-list.component';
import { NewRegistrationMasterListComponent } from './Component/new-registration-master-list/new-registration-master-list.component';
import { LoginComponent } from './loginComponent/login/login.component';
import { ImageUploadComponent } from './shared/uploadFile/image-upload/image-upload.component';
import { NewRegistrationMasterComponent } from './Component/new-registration-master/new-registration-master.component';

const routes: Routes = [{ path: '', component: AdminComponent,
children:[
          {path:'CounrtyMaster',component:CountryMasterComponent},
          {path:'states',component:StateMasterComponent},
          {path:'district',component:DistrictMasterComponent},
          {path:'subCaste',component:SubCasteListComponent},
          {path:'gotra',component:GotraListComponent},
          {path:'professionlist',component:ProfessionMasterListComponent},
         
          {path:'enquiries',component:EnquiryMasterListComponent},
          {path:'educated',component:EducationMasterListComponent},
          {path:'qualification',component:QualificationMasterListComponent},
          {path:'regitration',component:NewRegistrationMasterListComponent},
          {path:'Home',component:HomeComponent},
          {path:'login',component:LoginComponent},
          {path:'newRegistar',component:NewRegistrationMasterListComponent},
          {path:'newMaster',component:NewRegistrationMasterComponent},
          {
            path:'upload',component:ImageUploadComponent
          }
          

]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
