import { Injectable, Inject } from "@angular/core";

import { HttpClient, HttpHeaders, HttpParams,  } from "@angular/common/http";

import { Observable } from "rxjs";

import { InventoryItem, InventoryItemRequest } from "../shared/models/inventory.interface";
import { ItemUser } from "../shared/models/list-users.interface";
import { environment } from "src/environments/environment";
import { Seller } from "../models/models-seller";
import { RequestDevolution } from "../models/models-sales-request";

@Injectable({
  providedIn: "root",
})
export class PlantService {
  url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.basePath
  }

  getInventory(): Observable<InventoryItem[]> {
    
    return this.http.get<InventoryItem[]>(`${this.url}/packaging/inventory-plant`);
  }


  updateInventoryStock(inventoryItemEdit:InventoryItemRequest){
      return this.http.put(`${this.url}/packaging-inventory/plant`,inventoryItemEdit);
  }

  getAllUser(){
    return this.http.get<ItemUser[]>(`${this.url}/user`);
  }
 
  updateUserStatus(userId:string,status:string,name:string){
    return this.http.put(`${this.url}/user-status`,{userId,status,name});
  }

  getReportSalesByType(request:{sellers:string[],format:string,type:string},dateStart:string,dateEnd:string){
    let params:HttpParams = new HttpParams().set("dateStart",dateStart).set("dateEnd",dateEnd);
    return this.http.post(`${this.url}/report/sales-types`,request,{params,responseType:"blob"});
  }
  getAllSellers(){
    return this.http.get<Seller[]>(`${this.url}/admin-sales/sellers`);
  }

  getAllSales(page:number,peerPage:number,saleIds:Array<number>,date:string,folio:string){
    let parameters:HttpParams= new HttpParams();
    parameters= parameters.set("page",page.toString());
    parameters=parameters.set("peerPage",peerPage.toString());
    parameters=parameters.set("date",date);
    if(folio!=null){
    parameters=parameters.set("hint",folio);
    }
    return this.http.post(`${this.url}/sales-superadmin/sales`,{sales:saleIds},{params:parameters,observe:"response"});
}

getTicket(saleId:number){
  let httpOptions:Object={
  headers:new HttpHeaders({
      'Content-Type':'application/json'
  }),
  responseType:'text'
  }
  return this.http.get(`${this.url}/sale-ticket/${saleId}`,httpOptions);
}
getDevolutionTicket(saleId:number){
  let httpOptions:Object={
  headers:new HttpHeaders({
      'Content-Type':'application/json'
  }),
  responseType:'text'
  }
  return this.http.get(`${this.url}/devolution-ticket/${saleId}`,httpOptions);
}

getSaleCancelationsRequestByType(type:string,dateStart:string,dateEnd:string){
  let params:HttpParams = new HttpParams().set("type",type);
  if(dateStart){
    params=params.set("dateStart",dateStart);
  }
  if(dateEnd){
    params=params.set("dateEnd",dateEnd);
  }
  return this.http.get(`${this.url}/admin-sales/get-cancelations`,{observe:"response",params});
}

getSaleDevolutionsRequestByType(type:string,dateStart:string,dateEnd:string){
  let params:HttpParams = new HttpParams().set("type",type);
  if(dateStart){
    params=params.set("dateStart",dateStart);
  }
  if(dateEnd){
    params=params.set("dateEnd",dateEnd);
  }
  return this.http.get(`${this.url}/admin-sales/get-devolutions`,{observe:"response",params});
}

getDevolutionRequestDetails(saleId:number){
  return this.http.get<RequestDevolution>(`${this.url}/devolution-request/details/${saleId}`)
}

updateStatusDevolutionRequest(saleId:number,status:string,adminId:string){
  console.log(saleId,status,adminId);
  let params:HttpParams = new HttpParams().set("status",status).set("adminId",adminId);
  return this.http.put(`${this.url}/update-sale/request-devolution/${saleId}`,{},{params})
}

updateStatusCancelationRequest(saleId:number,status:string,adminId:string){
  console.log(saleId,status,adminId);
  let params:HttpParams = new HttpParams().set("status",status).set("adminId",adminId);
  return this.http.put(`${this.url}/update-sale/request/${saleId}`,{},{params})
}

updateCodeClient(clientId:number,newKeySAE:number){
  return this.http.put(`${this.url}/update-client/${clientId}`,{
    code: newKeySAE
  });
}

}
