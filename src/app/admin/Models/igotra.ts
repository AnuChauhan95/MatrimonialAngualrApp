import { IsubCaste } from "./isub-caste";

export interface Igotra {

        gotraId?: string,
        gortaName: string,
        status: boolean,
        subCasteId: string,
        createdby?: string,
        createdOn?: string,
        modifiedOn?: string
        modifiedBy?: string,
        casteMasters?: IsubCaste
        
}
