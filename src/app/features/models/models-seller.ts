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