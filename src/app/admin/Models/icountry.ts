import { IState } from "./istate";

export interface ICountry {

    countryId?: string,
    countryName: string,
    status: boolean,
    createdBy?: string,
    createdOn?: string,
    modifiedBy?: string,
    modifiedOn?: string,
    stateMasters?:IState[]
}
