import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

import {
  ingredient,
  newLineProduct,
  Tax,
} from "src/app/features/models/model-products";

@Injectable({
  providedIn: "root",
})
export class ServicesProductsService {
  private endpoint;
  constructor(private http: HttpClient) {
    this.endpoint = environment.basePath;
  }

  postAddProduct(objProduct: any) {
    const formData = new FormData();

    formData.set("keyProduct", objProduct.keyProduct);
    formData.set("nameProduct", objProduct.nameProduct);
    formData.set("productLine", objProduct.productLine);
    formData.set("ingredients", JSON.stringify(objProduct.ingredients));
    formData.set("presentations", JSON.stringify(objProduct.presentations));
    formData.set(
      "productRoviandaImage",
      JSON.stringify(objProduct.productRoviandaImage)
    );

    return this.http.post(`${this.endpoint}/product/rovianda`, formData);
  }

  getProductsRovianda() {
    return this.http.get(`${this.endpoint}/product/rovianda`);
  }

  getProductsLine() {
    return this.http.get(`${this.endpoint}/sae/get-products/lines`);
  }

  getTaxShema() {
    return this.http.get<Tax[]>(`${this.endpoint}/tax/schema`);
  }

  addProductsLine(body: newLineProduct) {
    return this.http.post(`${this.endpoint}/sae/product/line`, body);
  }

  getDetailsProduct(roviandaId: number) {
    return this.http.get(`${this.endpoint}/product/rovianda/${roviandaId}`);
  }

  putProductRovianda(roviandaId: number, objUpdate: any) {
    return this.http.put(
      `${this.endpoint}/product/rovianda/${roviandaId}`,
      objUpdate
    );
  }

  deleteProduct(roviandaId: number) {
    return this.http.delete(`${this.endpoint}/product/rovianda/${roviandaId}`);
  }

  getIngredientsDrief(type: string) {
    return this.http.get(`${this.endpoint}/list/ingredients?type=${type}`);
  }

  postAddIngredient(ingredient: ingredient) {
    return this.http.post(`${this.endpoint}/add/ingredient`, ingredient);
  }
}
