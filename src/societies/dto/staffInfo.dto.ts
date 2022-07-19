import { IsNotEmpty } from "class-validator";

export class StaffInfoDto{
  @IsNotEmpty()
    societyId:string;
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