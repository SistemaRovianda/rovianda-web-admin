import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoriesService {
  endpoint: string;

  constructor(private http:HttpClient) {
    this.endpoint=environment.basePath
   }

   getHistoryDrief(loteId: string){
     return this.http.get(`${this.endpoint}/quality/history/drief/${loteId}`);
   }

   getHistoryPackaging(loteId: string){
    return this.http.get(`${this.endpoint}/quality/history/packaging/${loteId}`);
   }

   getHistoryMeat(loteId:string){
     console.log(`${this.endpoint}/quality/history/meat/${loteId}`);
     return this.http.get(`${this.endpoint}/quality/history/meat/${loteId}`);
   }
}
