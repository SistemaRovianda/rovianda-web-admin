import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getUsersSales(rol: string){
    return this.http.get(`${this.endpoint}/user/rol/${rol}`)
  }
}
