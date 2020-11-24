import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { WarehouseModel } from '../models/mode-warehouse';


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
}
