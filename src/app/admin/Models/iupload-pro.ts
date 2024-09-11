import { IRegistration } from "./iregistration";

export interface IUploadPro {

   imageId ?:string,
    fileUpLoadOne:string,
     fileUploadTwo:string,
    fileUploadThree :string,
    newRegistrationModel?:IRegistration;
    profileID :string
}
