import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesClientsService {

  endpoint: string;
  constructor(
    private http: HttpClient) {
    this.endpoint = environment.basePath;
  }

  getNumberCreateClient(){
    return this.http.get(`${this.endpoint}/customer/customer-count`)
  }

  getUsersSales(rol: string){
    return this.http.get(`${this.endpoint}/user/rol/${rol}`)
  }

  postCustomerCreated(obj:any){
    return this.http.post(`${this.endpoint}/customer/create`,obj)
  }

  getCatalogPagosSat(){
    return this.http.get(`${this.endpoint}/catalogo-pagos-sat`)
  }

  getCatalogCfdi(){
    return this.http.get(`${this.endpoint}/catalogos-de-cfdi`)
  }
  getListOfClient(page:number,perPage:number){
    let httpParams:HttpParams= new HttpParams().append("page",page.toString()).append("perPage",perPage.toString());
    return this.http.get(`${this.endpoint}/sae/list-clients`,{params:httpParams,observe:"response"});
  }

  getSalesByClient(from:string,to:string,clientId:number,page:number,perPage:number){
    let httpParams:HttpParams= new HttpParams().append("from",from).append("to",to).append("page",page.toString()).append("perPage",perPage.toString());
    return this.http.get(`${this.endpoint}/sales-clients/${clientId}`,{params:httpParams,observe:"response"});
  }
}
