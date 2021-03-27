export interface WarehouseModel{
    
    CVE_ALM:string,
    DESCR:string,
    DIRECCION:string,
    ENCARGADO:string,
    TELEFONO:string
}
export interface DeliverToWarehouse{
    CODE:string,
    NAME:string,
    LOT:string,
    UNITS:number,
    WEIGHT:number,
    DATE:string
}

export interface DeviveryFromMainWarehouse{
    seller:string,
    code:string,
    name:string,
    presentation:string,
    loteId:string,
    units:number,
    weight:number,
    outputDate:string
}