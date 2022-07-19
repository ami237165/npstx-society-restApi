import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type VenderInfoDocument = VenderInfo & Document; 
@Schema()
export class VenderInfo{
  @Prop()  
    societyId:string;
    @Prop()
    venderDetails:Vendor[]
  }
  export interface Vendor {
    vandorCategory?: VENDOR_CATEGORY;
    name?: string;
    proprietorName?: string;
    whatsApp?: string;
    email?: string;
    panNo?: string;
    gstNo?: string;
    address?: string;
    pin?: string;
    location?: string;
    city?: string;
    state?: string;
    // vendorPic: File;
    // adharPic?: File;
    // panPic?: File;
    // gstCertiPic?: File;
  }
  
  export interface VENDOR_CATEGORY {
    OPTION1: "OPTION1";
    OPTION2: "OPTION2";
    OPTION3: "OPTION3";
  }

export const VenderInfoSchema = SchemaFactory.createForClass(VenderInfo)  