import { IState } from "./istate";

export interface IDistrict {
    districtId?: string,
  districtName:string,
  status: boolean,
  stateId:string,
  createdBy?: string,
  createdOn?: string,
  modifiedBy?: string,
  modifiedOn?:string,
  stateMasters?: IState
  
}
