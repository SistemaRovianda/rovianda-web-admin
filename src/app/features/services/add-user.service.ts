import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { UserInterface } from "../shared/models/user.interface";
import { Observable } from "rxjs";
import { AddUser } from "../shared/models/add-user.interface";

@Injectable({
  providedIn: "root",
})
export class AddUserService {
  url: string;

 
  constructor(
    private http: HttpClient
  ) {
    this.url = environment.basePath
  }

  addUser(user: AddUser): Observable<any> {
    
    return this.http.post<any>(`${this.url}/quality/user`, { ...user });
  }

  getIdSeller(): Observable<any> {
    return this.http.get<any>(`${this.url}/sae/seller-count`);
  }

  addSeller(seller: AddUser): Observable<any> {
    return this.http.post<any>(`${this.url}/sae/seller`, { ...seller });
  }

  getAllWarehouses(){
    return this.http.get<any[]>(`${this.url}/warehouses`);
  }
}
