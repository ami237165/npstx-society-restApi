import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type McInfoDocument = McInfo & Document;
@Schema()
export class McInfo {
    @Prop()  
    id:string;
    @Prop()  
    societyId:string;
    @Prop()
    periodMc?: string;
    @Prop()
    startDate?: Date;
    @Prop()
    endDate?: Date;
    @Prop()
    commiteeMemberDetails?: COMMMBER[];
  }
  export interface COMMMBER {
    name?: string;
    designation?: string;
    whatsappNo?: string;
    email?: string;
    adharCard?: File;
    panCard?: File;
    regLetter?: File;
  }

export const McInfoSchema = SchemaFactory.createForClass(McInfo)  