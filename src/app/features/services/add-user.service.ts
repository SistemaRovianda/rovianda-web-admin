import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { UserInterface } from "../shared/models/user.interface";
import { Observable } from "rxjs";
import { AddUser } from "../shared/models/add-user.interface";
import { SimpleUserUpdateRequest, UserPreSaleRegisterRequest, UserPreSaleRegisterResponse, UserPreSaleUpdateRequest, UserRegisterRequest, UserRegisterResponse, UserSellerRegisterRequest, UserSellerRegisterResponse, UserSellerUpdateRequest } from "../models/models-seller";

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

  registerSimpleUser(request:UserRegisterRequest) {
    return this.http.post<any>(`${this.url}/user-register`, { ...request });
  }
  getSimpleUserDetails(uid:string){
    return this.http.get<UserRegisterResponse>(`${this.url}/simple-user/details/`+uid);
  }
  updateSimpleUser(uid:string,request:SimpleUserUpdateRequest){
    return this.http.put(`${this.url}/simple-user/update/`+uid,request);
  }
  registerSellerUser(request:UserSellerRegisterRequest) {
    return this.http.post<any>(`${this.url}/user-seller/register`, { ...request });
  }
  getSellerUserDetails(uid:string) {
    return this.http.get<UserSellerRegisterResponse>(`${this.url}/user-seller/details/`+uid);
  }
  updateSellerUser(uid:string,request:UserSellerUpdateRequest){
    return this.http.put(`${this.url}/user-seller/update/`+uid,request);
  }
  registerPreSaleUser(request:UserPreSaleRegisterRequest) {
    return this.http.post<any>(`${this.url}/user-presale/register`, { ...request });
  }
  getPreSaleUser(uid:string) {
    return this.http.get<UserPreSaleRegisterResponse>(`${this.url}/user-presale/details/`+uid);
  }
  updatePreSaleUser(uid:string,request:UserPreSaleUpdateRequest){
    return this.http.put(`${this.url}/user-presale/update/`+uid,request);
  }
  getAllWarehouses(){
    return this.http.get<any[]>(`${this.url}/warehouses`);
  }
}
