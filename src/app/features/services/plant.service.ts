import { Injectable, Inject } from "@angular/core";

import { HttpClient,  } from "@angular/common/http";

import { Observable } from "rxjs";

import { InventoryItem, InventoryItemRequest } from "../shared/models/inventory.interface";
import { ItemUser } from "../shared/models/list-users.interface";
import { environment } from "src/environments/environment";

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

}
