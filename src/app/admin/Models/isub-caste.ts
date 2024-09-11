import { Igotra } from "./igotra";

export interface IsubCaste {
    subCasteId?: string,
    subCasteName: string,
    status?: boolean,
    createdby?: string,
    createdOn?: string,
    modifiedBy?: string,
    modifiedOn?: string,
    gotraMasters?: Igotra[]
}
