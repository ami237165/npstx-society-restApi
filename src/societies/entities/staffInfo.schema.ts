import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type StaffInfoDocument = StaffInfo & Document

@Schema()
export class StaffInfo{
    @Prop()
    staffDetails:Staff[]
  }
  
  export interface Staff {
    staffCategory: STAFF_CATEGORY;
    name?: string;
    category?: string;
    whatsApp?: string;
    email?: string;
    sAddress?: string;
    sPincode?: string;
    sLocation?: string;
    sCity?: string;
    sState?: string;
    // sPhoto?: File;
    // sAdhar?: File;
    // sPan?: File;
  }
  export interface STAFF_CATEGORY {
    OPTION1: "OPTION1";
    OPTION2: "OPTION2";
    OPTION3: "OOPTION3";
  }
export const StaffInfoSchema = SchemaFactory.createForClass(StaffInfo)  