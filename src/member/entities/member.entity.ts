import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// import { isNotEmpty } from "class-validator";

export type MemberDocument = Member & Document;

//this is schema file
@Schema()
export class Member {
    @Prop()  
    id:string;
    @Prop()
    propertyType: PROPERTY_TYPE;
    // @Prop()
    // ownerProfilePic?: File;
    @Prop()
    ownerTitle: OWNER_TITLE;
    @Prop()
    lastName: string;
    @Prop()
    firstName: string;
    @Prop()
    middleName: string;
    @Prop()
    ownerMobileNo: string;
    @Prop()
    landlineNo: string;
    @Prop()
    ownerEmail: string;
    @Prop()
    ownerGender: OWNER_GENDER;
    @Prop()
    bloodGroup: string;
    @Prop()
    dob: Date;
    @Prop()
    anniversary: Date;
    @Prop()
    panNo: string;
    @Prop()
    gstNo: string;
    // @Prop()
    // ownerFile1?: File;
    // @Prop()
    // ownerFile2?: File;
    // @Prop()
    // ownerFile3?: File;
    @Prop()
    coOwner:COOWNER[];
    // @Prop()
    // familyProfilePic?: File;
    @Prop()
    familyTitle: FAMILY_TITLE;
    @Prop()
    familyName: string;
    @Prop()
    relation: string;
    @Prop()
    familyMobileNo: string;
    @Prop()
    familyEmail: string;
    @Prop()
    familyDob: Date;
    @Prop()
    age: string;
    @Prop()
    familyMemberGender: FAMILY_MEMBER_GENDER;
    @Prop()
    occupation: OCCUPATION;
    @Prop()
    familyMemberBloodGroup?: string;
    @Prop()
    identity: string;
    @Prop()
    softDelete:boolean;
    // @Prop()
    // familyFile: File;
  }
  
  export enum PROPERTY_TYPE {
    'OFFICE' = 'OFFICE',
    'SHOP' = 'SHOP',
    'FLAT' = 'FLAT',
  }
  
  export enum OWNER_TITLE {
    'MR.' = 'MR.',
    'MISS.' = 'MISS.',
    'MRS.' = 'MRS.',
  }
  
  export enum OWNER_GENDER {
    'MALE' = 'MALE',
    'FEMALE' = 'FEMALE',
  }
  
  export enum FAMILY_TITLE {
    'MR.' = 'MR.',
    'MISS.' = 'MISS.',
    'MRS.' = 'MRS.',
  }
  
  export enum COOWNER_GENDER {
    'MALE' = 'MALE',
    'FEMALE' = 'FEMALE',
  }
  
  export enum FAMILY_MEMBER_GENDER {
    'MALE' = 'MALE',
    'FEMALE' = 'FEMALE',
  }
  
  export enum OCCUPATION {
    'SERVICE' = 'SERVICE',
    'BUSINESS' = 'BUSINESS',
  }
  
  
  export class COOWNER{
    name:string;
    contactNo:string;
    email:string;
  }

 export const MemberSchema = SchemaFactory.createForClass(Member);
