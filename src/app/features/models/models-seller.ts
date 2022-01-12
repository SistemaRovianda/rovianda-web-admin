export interface listSellerItem{
    id:string,
    name:string
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