import { IUploadPro } from "./iupload-pro";

export interface IRegistration {

    profileID?: string,
   
    religion: string,
    maritalStatus: string,
    location:string,
    age: number,
    height: number,
    caste?: string,
    complexion: string,
    homeLocation: string,
    createdBy?: string,
    createdOn: string,
    modifiedBy?: string,
    modifiedOn: string,
    multipleUser?:IUploadPro [],
    countryId:string,
    districtId: string,
    enqId:string,
    gotraId: string,
    professionId:string,
    qualificationId:string,
    stateId:string,
    subCasteId: string,
    image1: string,
    image2: string,
    image3:string
}
