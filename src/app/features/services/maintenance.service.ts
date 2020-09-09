import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = environment.basePath;
  }

  getMaintenance(){
    return this.http.get(`${this.endpoint}/maintenance`);
  }

  getAllStores(){
    return this.http.get(`${this.endpoint}/maintenance/stores`)
  }

  postStoreDevices(objdates:any){
    return this.http.post(`${this.endpoint}/maintenance/store/device`, objdates)
  }
}
