export class ImpUserPwdDto {
    _id:string
    incomePan?: string;
    incomeUserName?: string;
    incomePass?: string;
    incomeAuthOtp?: string;
    incomeAuthName?: string;
    tdsTan?: string;
    tdsUserName?: string;
    tdsPass?: string;
    tdsAuthOpt?: string;
    tdsAuthName?: string;
    gstNo?: string;
    gstUserName?: string;
    gstPass?: string;
    gstAuthOtp?: string;
    gstAuthName?: string;
    propertyTax?: PROPERTYTAX[];
    waterTax?: WATERTX[];
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