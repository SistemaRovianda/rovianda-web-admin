import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FridgesService {
  endpoint:string;
  constructor(private http:HttpClient) { 
    this.endpoint=environment.basePath
  }

  getFridges(){
    return this.http.get(`${this.endpoint}/fridges`)
  }

  postFridge(temp:any){
    return this.http.post(`${this.endpoint}/fridge`,temp);
  }

  deleteFridge(fridgeId: number){
    return this.http.delete(`${this.endpoint}/fridge/${fridgeId}`)
  }

}
