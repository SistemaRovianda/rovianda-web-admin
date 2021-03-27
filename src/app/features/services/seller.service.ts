
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Client, listSellerItem, VisitSeller } from '../models/models-seller';

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
      return this.http.get<listSellerItem[]>(`${this.endpoint}/sellers-list`);
  }

  getAllClients(sellerUid:string){
    
    return this.http.get<Client[]>(`${this.endpoint}/seller-clients/${sellerUid}`);
  }

  deteleClient(clientId:number){
    return this.http.delete(`${this.endpoint}/customer/delete-client/${clientId}`);
  }

}
