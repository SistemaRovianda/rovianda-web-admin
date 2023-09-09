export interface listSellerItem{
    id:string,
    name:string,
    cve:string
}

export interface VisitSeller{
    
        client:Client,
        visitedStatus:ClientVisitedStatus,
        clientVisitId:number,
        time: string
    
}

export interface Client{
    id:number;
    idAspel:number;
    typeClient:string;
    keyClient:number;
    name:string;
    credit:number;
    currentCredit:number;
    rfc:string;
}

export enum ClientVisitedStatus{
    PENDING="PENDING",INVISIT="INVISIT",VISITED="VISITED"
}

export interface Seller{
    id:string;
    saeKey:number,
    name: string;
    email: string,
    job:string,
    warehouseKeySae:string,
    status: string,
    cve: string
}
export interface Sale{
    saleId:number;
    date:string;
    hour?:string;
    amount:number;
    folio:string;
    statusStr:string,
    seller:{
        name:string;
        email?:string;
    },
    devolutionRequest:boolean
} 


export interface UserRegisterRequest{
    name:string,
    email:string
    password:string,
    rol:string,
    jobDescription:string
}

export interface UserRegisterResponse{
    name:string,
    email:string
    password:string,
    rol:string,
    jobDescription:string
}

export interface UserSellerRegisterRequest{
    name:string,
    email:string,
    password:string,
    warehouseId:string,
    rol:string,
    jobDescription:string,
    keySae:string,
    folio:string
}

export interface UserSellerRegisterResponse{
    name:string,
    email:string,
    password:string,
    warehouseId:string,
    jobDescription:string,
    rol:string,
    keySae:string,
    folio:string
}

export interface UserPreSaleRegisterRequest{
    name:string,
    email:string,
    password:string,
    rol:string,
    jobDescription:string,
    folio:string,
    sellers:string[]
}


export interface UserPreSaleRegisterResponse{
    name:string,
    email:string,
    password:string,
    jobDescription:string,
    rol:string,
    folio:string,
    sellers:string[]
}

export interface SimpleUserUpdateRequest{
    name:string,
    password:string,
    jobDescription:string
}
export interface UserSellerUpdateRequest{
    name:string,
    password:string,
    warehouseId:string,
    keySae:number,
    folio:string,
    jobDescription:string
}
export interface UserPreSaleUpdateRequest{
    name:string,
    password:string,
    folio:string,
    jobDescription:string,
    sellers:string[]
}