import mongoose, { Document, ObjectId } from 'mongoose';
import { Prop,Schema , SchemaFactory} from '@nestjs/mongoose'

export type SocietyDocument = Society & Document;

@Schema()
export class Society {

  @Prop()
  id:string;
  @Prop()
  societyType: SOCIETY_TYPE;
  @Prop()
  societySubType: SOCIETY_SUB_TYPE;
  @Prop()
  name: string;
  @Prop()
  regNo: string;
  @Prop()
  regDate: Date;
  @Prop()
  primaryEmailID: string;
  @Prop()
  secondaryEmailID?: string;
  @Prop()
  contactNo: string;
  @Prop()
  address: string;
  @Prop()
  pinCode: string;
  @Prop()
  location: string;
  @Prop()
  city: string;
  @Prop()
  state: string;
  @Prop()
  gstIn?: string;
  @Prop()
  uidNo?: string;
  @Prop()
  panNo?: string;
  @Prop()
  tanNo?: string;
  @Prop()
  societyAreaType?: SOCIETY_AREA_TYPE;
  @Prop()
  societyAreaUnitType?: SOCIETY_AREA_UNIT_TYPE;
  @Prop()
  chooseSecondaryLanguage?: CHOOSE_SECONDARY_LANGUAGE;
  @Prop()
  isGstIncluded: boolean;
  @Prop()
  specialMessage?: string;
  @Prop()
  createdOn?: Date;
  @Prop()
  createdBy?: string;
  @Prop()
  cgstAccoundCode?: string;
  @Prop()
  sgstAccountCode?: string;
  @Prop()
  interestOnDuesApplyForGst?: boolean;
  @Prop()
  interestOnDuesApplyForGstExamptAmountLimit?: string;
  @Prop()
  rateOfCgst?: string;
  @Prop()
  rateOfSgst?: string;
  @Prop()
  cgstRoundedUpto?: string;
  @Prop()
  sgstRoundedUpto?: string;
  @Prop()
  limitOfGstExampt?: string;
  @Prop()
  societyImg?:Buffer;
  @Prop()
  interestMethod?: INTEREST_METHOD;
  @Prop()
  interestType?: INTEREST_TYPE;
  @Prop()
  interestWorking?: INTEREST_WORKING;
  @Prop()
  footerFirst?: string;
  @Prop()
  footerSecond?: string;
  @Prop()
  signatureBill?: SIGNATURE_BILL[];
  @Prop()
  signatureVoucher?: SIGNATURE_VOUCHER[];
  @Prop()
  authAmt?: string;
  @Prop()
  liabilities?: string;
}

export enum INTEREST_METHOD {
  "DAYWISE" = "DAYWISE",
  "MONTHLY" = "MONTHLY",
  "QUARTERLY" = "QUARTERLY",
  "ANNUALLY" = "ANNUALLY",
}

export enum INTEREST_TYPE {
  "SIMPLE INTEREST" = "SIMPLE INTEREST",
  "COMPOUND INTEREST" = "COMPOUND INTEREST",
  "DOUBLE INTEREST" = "DOUBLE INTEREST",
}

export enum INTEREST_WORKING {
  "INTEREST FIRST" = "INTEREST FIRST",
  "PRINCIPLE FIRST" = "PRINCIPLE FIRST",
}

export enum SIGNATURE_BILL {
  "SECRETARY" = "SECRETARY",
  "CHAIRMAN" = "CHAIRMAN",
  "VOICE CHAIRMAN" = "VOICE CHAIRMAN",
  "TREASURER" = "TREASURER",
}

export enum SIGNATURE_VOUCHER {
  "SECRETARY" = "SECRETARY",
  "CHAIRMAN" = "CHAIRMAN",
  "VOICE CHAIRMAN" = "VOICE CHAIRMAN",
  "TREASURER" = "TREASURER",
}

export enum SOCIETY_TYPE {
  "RESIDENTAIL" = "RESIDENTAIL",
  "COMMERCIAL" = "COMMERCAIL",
}

export enum SOCIETY_AREA_TYPE {
  "CARPET" = "CARPET",
  "BUILTUP" = "BUILTUP",
  "SUPERBUILTUP" = "SUPERBUILTUP",
}

export enum SOCIETY_SUB_TYPE {
  "SOCIETY" = "SOCIETY",
  "BUNGALOW" = "BUNGALOW",
  "ROWHOUSE" = "ROWHOUSE",
  "PLOT" = "PLOT",
}

export enum SOCIETY_AREA_UNIT_TYPE {
  "SQUAREFEET" = "SQUAREFEET",
  "SQUAREMETER" = "SQUAREMETER",
}

export enum CHOOSE_SECONDARY_LANGUAGE {
  "HIND" = "HINDI",
  "MARATHI" = "MARATHI",
  "OTHER" = "OTHER",
}
export const SocietySchema = SchemaFactory.createForClass(Society);