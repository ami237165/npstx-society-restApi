import { IsBoolean, IsNotEmpty } from "class-validator";

export class SocietiesDTO{
        _id:string;
        societyType: SOCIETY_TYPE;
        societySubType: SOCIETY_SUB_TYPE;
        societyName: string;
        @IsNotEmpty()
        societyRegistrationNo: string;
        societyRegistrationDate: Date;
        @IsNotEmpty()
        primaryEmailID: string;
        secondaryEmailID?: string;
        societyContactNo: string;
        societyAddress: string;
        socityPincode: string;
        societyLocation: string;
        societyCity: string;
        societyState: string;
        gstIn?: string;
        @IsNotEmpty()
        uidNo?: string;
        panNo?: string;
        tanNo?: string;
        societyAreaType?: SOCIETY_AREA_TYPE;
        societyAreaUnitType?: SOCIETY_AREA_UNIT_TYPE;
        chooseSecondaryLanguage?: CHOOSE_SECONDARY_LANGUAGE;
        @IsBoolean()
        isGstIncluded: boolean;
        specialMessage?: string;
        createdOn?: Date;
        createdBy?: string;
        cgstAccoundCode?: string;
        sgstAccountCode?: string;
        @IsBoolean()
        interestOnDuesApplyForGst?: boolean;
        interestOnDuesApplyForGstExamptAmountLimit?: string;
        rateOfCgst?: string;
        rateOfSgst?: string;
        cgstRoundedUpto?: string;
        sgstRoundedUpto?: string;
        limitOfGstExampt?: string;
        // chooseFile?: File;
      }
      
      export enum SOCIETY_TYPE {
        'RESIDENTAIL' = 'RESIDENTAIL',
        'COMMERCIAL' = 'COMMERCAIL',
      }
      
      export enum SOCIETY_AREA_TYPE {
        'CARPET' = 'CARPET',
        'BUILTUP' = 'BUILTUP',
        'SUPERBUILTUP' = 'SUPERBUILTUP',
      }
      
      export enum SOCIETY_SUB_TYPE {
        'SOCIETY' = 'SOCIETY',
        'BUNGALOW' = 'BUNGALOW',
        'ROWHOUSE' = 'ROWHOUSE',
        'PLOT' = 'PLOT',
      }
      
      export enum SOCIETY_AREA_UNIT_TYPE {
        'SQUAREFEET' = 'SQUAREFEET',
        'SQUAREMETER' = 'SQUAREMETER',
      }
      
      export enum CHOOSE_SECONDARY_LANGUAGE {
        'HIND' = 'HINDI',
        'MARATHI' = 'MARATHI',
        'OTHER' = 'OTHER',
      }
