import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { DeliverToWarehouse, DeviveryFromMainWarehouse, WarehouseModel } from '../models/mode-warehouse';
import { AdminPreRegisterProductDetails, AdminProductsCatalog, RequestPreRegistProduct } from "../models/model-products";


@Injectable({
  providedIn: "root",
})
export class WarehouseService {
  private endpoint;
  constructor(private http: HttpClient) {
    this.endpoint = environment.basePath;
  }

  getAllWarehousesActive() {
    return this.http.get<WarehouseModel[]>(`${this.endpoint}/warehouses`);
  }
  registerWarehouse(description:string) {
    return this.http.post(`${this.endpoint}/warehouse`,{description});
  }

  getRecordsOfDelivered(warehouseId:string,dateStart:string,dateEnd:string,type:string){
    return this.http.get<DeliverToWarehouse[]>(`${this.endpoint}/packaging-warehouse/`+warehouseId+`?dateStart=${dateStart}&dateEnd=${dateEnd}&type=${type}`);
  }

  getRecordsOfDeliveredReport(warehouseId:number,dateStart:string,dateEnd:string,type:string,format:string){
    return this.http.get(`${this.endpoint}/report/packaging-warehouse/`+warehouseId+`?dateStart=${dateStart}&dateEnd=${dateEnd}&type=${type}&format=${format}`,{responseType: "blob"});
  }

  getRecordsOfInventoryReport(warehouseId,type:string){
    return this.http.get(`${this.endpoint}/packaging/inventory-warehouse/${type}?ware=`+warehouseId,{responseType: "blob"});
  }

  getAllOutputsToSellerFromMainWarehouse(from:string,to:string){
    let params:HttpParams = new HttpParams().append('from',from).append('to',to);
    return this.http.get<Array<DeviveryFromMainWarehouse>>(`${this.endpoint}/plant-delivery`,{params});
  }

  getReportOutputsOfPlant(from:string,to:string,type:string){
    let params:HttpParams = new HttpParams().append('from',from).append('to',to).append('type',type);
    return this.http.get(`${this.endpoint}/report/plant-delivery`,{params,responseType: "blob"});
  }


  getAllProductsRoviandaCatalog(hint?:string){
    
    return this.http.post<AdminProductsCatalog[]>(`${this.endpoint}/admin-products/catalog`,{hint});
  }

  getPreRegisterProductDetails(code:string){
    let params:HttpParams = new HttpParams().set("code",code);
    return this.http.get<AdminPreRegisterProductDetails>(`${this.endpoint}/admin-products/find-preregister`,{params});
  }

  registPreRegist(body:RequestPreRegistProduct){
    return this.http.post(`${this.endpoint}/admin-products/regist-preregister`,body);
  }
  updatePreRegist(presentationId:number,body:RequestPreRegistProduct){
    return this.http.put(`${this.endpoint}/admin-products/update/${presentationId}`,body);
  }

  deletePreregisterProduct(presentationId:number){
    return this.http.delete(`${this.endpoint}/admin-products/delete/${presentationId}`);
  }
}
