import { Schema, SchemaFactory } from "@nestjs/mongoose";

export type McInfoDocument = McInfo & Document;
@Schema()
export class McInfo {
    periodMc?: string;
    startDate?: Date;
    endDate?: Date;
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