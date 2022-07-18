import { Schema, SchemaFactory } from "@nestjs/mongoose";
export type SocietyDocDocument = SocietyDoc & Document

@Schema()
export class SocietyDoc{
    societyDocument:Documents[]
  }
  
  export interface Documents {
//     regCerti?: File;
//     pan?: File;
//     tan?: File;
//     gstCerti?: File;
//     iod?: File;
//     commen?: File;
//     occup?: File;
//     bcc?: File;
//     ulc?: File;
//     devAgree?: File;
//     titleCerti?: File;
//     search?: File;
//     propCard?: File;
//     statement?: File;
//     naOrder?: File;
//     fireNoc?: File;
//     locPlan?: File;
//     floorPlan?: File;
//     ocAppr?: File;
//     propTax?: File;
//     waterBill?: File;
  }
export const SocietyDocSchema = SchemaFactory.createForClass(SocietyDoc)  