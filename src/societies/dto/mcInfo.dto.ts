export class McInfoDto {
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