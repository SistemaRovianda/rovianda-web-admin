import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { ingredient } from 'src/app/features/models/model-products';


@Injectable({
  providedIn: 'root'
})
export class ServicesProductsService {
  private endpoint;
  constructor(
    private http:HttpClient
  ) {   
    this.endpoint = environment.basePath;
  }

  postAddProduct(objProduct:any){
    return this.http.post(`${this.endpoint}/product/rovianda`, objProduct);
  }

  getProductsRovianda(){
    return this.http.get(`${this.endpoint}/product/rovianda`)
  }

  getDetailsProduct(roviandaId:number){
    return this.http.get(`${this.endpoint}/product/rovianda/${roviandaId}`)
  }

  putProductRovianda(roviandaId:number,objUpdate:any){
    return this.http.put(`${this.endpoint}/product/rovianda/${roviandaId}`,objUpdate)
  }

  deleteProduct(roviandaId:number){
    return this.http.delete(`${this.endpoint}/product/rovianda/${roviandaId}`);
  }

  getIngredientsDrief(type: string){
    return this.http.get(`${this.endpoint}/list/ingredients?type=${type}`);
  }

  postAddIngredient(ingredient: ingredient){
    return this.http.post(`${this.endpoint}/add/ingredient`,ingredient)
  }
}