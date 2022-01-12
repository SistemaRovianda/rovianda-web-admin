export interface SaleRequest{
    folio:string,
    sellerName:string,
    date:string,
    saleId:number,
    createAt:string,
    status:string
}
export interface RequestDevolution{
    saleId:number,
    folio:string,
    sellerName:string,
    adminAccepted:string,
    status:string,
    dateSale:string,
    dateRequest:string,
    dateAttended:string,
    observations:string,
    originalTicket:string,
    modifiedTicket:string,
    devolutionProducts:ProductDevolution[]
 }
 
 export interface ProductDevolution{
    productName:string,
    quantity:number,
    price:number,
    uniMed:string
 }