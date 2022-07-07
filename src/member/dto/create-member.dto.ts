import { IsNotEmpty } from "class-validator";

export class CreateMemberDto {
    _id:string;
    @IsNotEmpty()
    propertyType: PROPERTY_TYPE;
    // ownerProfilePic?: File;
    @IsNotEmpty()
    ownerTitle?: OWNER_TITLE;
    lastName?: string;
    firstName?: string;
    middleName?: string;
    ownerMobileNo?: string;
    landlineNo?: string;
    ownerEmail?: string;
    ownerGender?: OWNER_GENDER;
    bloodGroup?: string;
    dob?: Date;
    anniversary?: Date;
    @IsNotEmpty()
    panNo: string;
    @IsNotEmpty()
    gstNo: string;
    softDelete:boolean;
    // ownerFile1?: File;//
    // ownerFile2?: File;//
    // ownerFile3?: File;//
  
    coOwner:COOWNER[];
  
    // familyProfilePic?: File;
    @IsNotEmpty()
    familyTitle: FAMILY_TITLE;
    familyName?: string;
    relation?: string;
    familyMobileNo?: string;
    familyEmail?: string;
    familyDob?: Date;
    age: string;
    familyMemberGender?: FAMILY_MEMBER_GENDER;
    occupation?: OCCUPATION;
    familyMemberBloodGroup?: string;
    identity?: string;
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
    @IsNotEmpty()
    name:string;
    contactNo:string;
    email:string;
  }
