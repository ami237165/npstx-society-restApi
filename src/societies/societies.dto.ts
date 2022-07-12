import { IsBoolean, IsNotEmpty } from "class-validator";

export class SocietiesDTO{
  _id:string;
  societyType: SOCIETY_TYPE;
  societySubType: SOCIETY_SUB_TYPE;
  name: string;
  regNo: string;
  regDate: Date;
  primaryEmailID: string;
  secondaryEmailID?: string;
  contactNo: string;
  address: string;
  pinCode: string;
  location: string;
  city: string;
  state: string;
  gstIn?: string;
  uidNo?: string;
  panNo?: string;
  tanNo?: string;
  societyAreaType?: SOCIETY_AREA_TYPE;
  societyAreaUnitType?: SOCIETY_AREA_UNIT_TYPE;
  chooseSecondaryLanguage?: CHOOSE_SECONDARY_LANGUAGE;
  isGstIncluded: boolean;
  specialMessage?: string;
  createdOn?: Date;
  createdBy?: string;
  cgstAccoundCode?: string;
  sgstAccountCode?: string;
  interestOnDuesApplyForGst?: boolean;
  interestOnDuesApplyForGstExamptAmountLimit?: string;
  rateOfCgst?: string;
  rateOfSgst?: string;
  cgstRoundedUpto?: string;
  sgstRoundedUpto?: string;
  limitOfGstExampt?: string;
  // societyImg?: File;
  interestMethod?: INTEREST_METHOD;
  interestType?: INTEREST_TYPE;
  interestWorking?: INTEREST_WORKING;
  footerFirst?: string;
  footerSecond?: string;
  signatureBill?: SIGNATURE_BILL;
  signatureVoucher?: SIGNATURE_VOUCHER;
  authAmt?: string;
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