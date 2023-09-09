
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Client, listSellerItem, Seller, VisitSeller } from '../models/models-seller';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  endpoint: string;
  constructor(
    private http: HttpClient) {
    this.endpoint = environment.basePath;
  }

  getScheduleByDate(sellerUid:string,dateStr:string){
      
    return this.http.get<VisitSeller[]>(`${this.endpoint}/seller/customer/schedule?sellerUid=${sellerUid}&date=${dateStr}`)
  }

  getAllSeller(){
      return this.http.get<Seller[]>(`${this.endpoint}/sellers-list`);
  }

  getAllClients(sellerUid:string){
    
    return this.http.get<Client[]>(`${this.endpoint}/seller-clients/${sellerUid}`);
  }

  deteleClient(clientId:number){
    return this.http.delete(`${this.endpoint}/customer/delete-client/${clientId}`);
  }

  getListOfSellers(){
    return this.http.get<any[]>(`${this.endpoint}/admin-sales/sellers`);
  }
  getListOfClientReport(format:string,hint:string,type:string,sellerId:string){
    let httpParams:HttpParams= new HttpParams().append("format",format);
    
    if(hint!=null && hint!="" && type!=null && type!=""){
      httpParams=httpParams.append("type",type);
      httpParams=httpParams.append("hint",hint);
    }
    if(sellerId!="0" && sellerId!=null && sellerId!=""){
      httpParams=httpParams.append("sellerId",sellerId);
    }
    return this.http.get(`${this.endpoint}/customers-report/sellers`,{params:httpParams,responseType:"blob"});
  }

  updatePassword(uid:string,password:string){
    return this.http.post(`${this.endpoint}/user-password`,{uid,password});
  }

 
}
