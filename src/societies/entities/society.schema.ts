import mongoose, { Document, ObjectId } from 'mongoose';
import { Prop,Schema , SchemaFactory} from '@nestjs/mongoose'

export type SocietyDocument = Society & Document;

@Schema()
export class Society {
    @Prop()
    id: string;
    @Prop()
    societySubType: SOCIETY_SUB_TYPE;
    @Prop()
    societyType: SOCIETY_TYPE;
    @Prop()
    societyRegistrationNo: string;
    @Prop()
    societyName: string;
    @Prop()
    primaryEmailID: string;
    @Prop()
    societyRegistrationDate: Date;
    @Prop()
    societyContactNo: string;
    @Prop()
    secondaryEmailID?: string;
    @Prop()
    socityPincode: string;
    @Prop()
    societyAddress: string;
    @Prop()
    societyCity: string;
    @Prop()
    societyLocation: string;
    @Prop()
    gstIn?: string;
    @Prop()
    societyState: string;
    @Prop()
    panNo?: string;
    @Prop()
    uidNo?: string;
    @Prop()
    societyAreaType?: SOCIETY_AREA_TYPE;
    @Prop()
    tanNo?: string;
    @Prop()
    chooseSecondaryLanguage?: CHOOSE_SECONDARY_LANGUAGE;
    @Prop()
    societyAreaUnitType?: SOCIETY_AREA_UNIT_TYPE;
    @Prop()
    specialMessage?: string;
    @Prop()
    isGstIncluded: boolean;
    @Prop()
    createdBy?: string;
    @Prop()
    createdOn?: Date;
    @Prop()
    sgstAccountCode?: string;
    @Prop()
    cgstAccoundCode?: string;
    @Prop()
    interestOnDuesApplyForGstExamptAmountLimit?: string;
    @Prop()
    interestOnDuesApplyForGst?: boolean;
    @Prop()
    rateOfSgst?: string;
    @Prop()
    rateOfCgst?: string;
    @Prop()
    sgstRoundedUpto?: string;
    @Prop()
    cgstRoundedUpto?: string;
    // @Prop()
    // chooseFile?: File;
    @Prop()
    limitOfGstExampt?: string;
    
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
      export const SocietySchema = SchemaFactory.createForClass(Society);