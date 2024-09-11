import { ICountry } from "./icountry";
import { IDistrict } from "./idistrict";

export interface IState {
    stateId?: string,
  stateName: string,
  status: boolean,
  countryId: string,
   
    createdBy?: string,
    createdOn?: string,
    modifiedBy?: string,
    modifiedOn?: string,
    countryMasters?:ICountry,
    districtMasters?:IDistrict[]
}
