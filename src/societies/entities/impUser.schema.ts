import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNotEmpty } from "class-validator";

export type ImpUserPwdDocument = ImpUserPwd & Document;

@Schema()
export class ImpUserPwd {
    @Prop()  
    id:string;
    @Prop()
    societyId:string;
    @Prop()
    incomePan?: string;
    @Prop()
    incomeUserName?: string;
    @Prop()
    incomePass?: string;
    @Prop()
    incomeAuthOtp?: string;
    @Prop()
    incomeAuthName?: string;
    @Prop()
    tdsTan?: string;
    @Prop()
    tdsUserName?: string;
    @Prop()
    tdsPass?: string;
    @Prop()
    tdsAuthOpt?: string;
    @Prop()
    tdsAuthName?: string;
    @Prop()
    gstNo?: string;
    @Prop()
    gstUserName?: string;
    @Prop()
    gstPass?: string;
    @Prop()
    gstAuthOtp?: string;
    @Prop()
    gstAuthName?: string;
    @Prop()
    propertyTax?: PROPERTYTAX[];
    @Prop()
    waterTax?: WATERTX[];
    @Prop()
    eleTax?: ELETAX[];
}

  
  export interface PROPERTYTAX {
    proTaxNo?: string;
    proUserName?: string;
    proPass?: string;
    proAuthOtp?: string;
    proAuthName?: string;
  }
  
  export interface WATERTX {
    watTaxNo?: string;
    watName?: string;
    watPass?: string;
    watAuthOtp?: string;
    watAuthName?: string;
  }
  
  export interface ELETAX {
    eleTaxNo?: string;
    eleName?: string;
    elePass?: string;
    eleAuthOtp?: string;
    eleAuthName?: string;
  }


  export const ImpUserPwdSchema = SchemaFactory.createForClass(ImpUserPwd);