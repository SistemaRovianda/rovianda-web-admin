import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = environment.basePath
  }

  //drief
  getReportpdfentranceDrief(driefId: string) {
    let options = { params: new HttpParams().set('uid', 'PjsC69VezAeJKlKlRmXW5Vkoq5Z2') }
    return this.http.get(`${this.endpoint}/report/entry/drief/${driefId}`, { ...options, responseType: "blob" });
  }

  getReportExcelEntranceDrief(driefId: string) {
    let options = { params: new HttpParams().set('uid', 'PjsC69VezAeJKlKlRmXW5Vkoq5Z2') }
    return this.http.get(`${this.endpoint}/report/document/entry/drief/${driefId}`, { ...options, responseType: "blob" });
  }

  getReportPdfPepsDrief(obj) {
    let options = {
      params: new HttpParams()
        .set('initDate', obj.dateStart).set('finalDate', obj.dateEnd)
    }
    return this.http.get(`${this.endpoint}/report/warehouse`, { ...options, responseType: "blob" })
  }

  getReportExcelPepsDrief(obj) {
    let options = {
      params: new HttpParams()
        .set('initDate', obj.dateStart).set('finalDate', obj.dateEnd)
    }
    return this.http.get(`${this.endpoint}/report/document/warehouse`, { ...options, responseType: "blob" })
  }

  //packing
  getReportPDFpackingDates(obj){
    let options = { params: new HttpParams().set('uid', 'PjsC69VezAeJKlKlRmXW5Vkoq5Z2') }
    return this.http.get(`${this.endpoint}/report/entry/packing/${obj.dateStart}/${obj.dateEnd}`, { ...options, responseType: "blob" })
  }

  getReportPDFPackingForId(packingId: string){
    return this.http.get(`${this.endpoint}/report/entry/packing/${packingId}`, {responseType: "blob"})
  }

  getReportExcelPackingDates(obj){
    let options = { params: new HttpParams().set('uid', 'PjsC69VezAeJKlKlRmXW5Vkoq5Z2') }
    return this.http.get(`${this.endpoint}/report/document/entry/packing/${obj.dateStart}/${obj.dateEnd}`,  { ...options, responseType: "blob" })
  }

  getReportExcelPackingForId(pakingId:string){
    let options = { params: new HttpParams().set('uid', 'PjsC69VezAeJKlKlRmXW5Vkoq5Z2') }
    return this.http.get(`${this.endpoint}/report/document/entry/packing/${pakingId}`, {...options,responseType: "blob"})
  }

  //meat aquí termina dios y continuo solo yo :'v

    getReportExcelReception(meatId:string){
      let options = { params: new HttpParams().set('uid', 'PjsC69VezAeJKlKlRmXW5Vkoq5Z2') }
      return this.http.get(`${this.endpoint}/report/document/entry/meat/${meatId}`, {...options,responseType: "blob"})
    }

    getReportPdfReception(meatId:string){
      let options = { params: new HttpParams().set('uid', 'PjsC69VezAeJKlKlRmXW5Vkoq5Z2') }
      return this.http.get(`${this.endpoint}/report/entry/meat/${meatId}`, {...options,responseType: "blob"})
    }

    getReportExcelFormulation(formulationId:string){
      let options = { params: new HttpParams().set('uid', 'PjsC69VezAeJKlKlRmXW5Vkoq5Z2') }
      return this.http.get(`${this.endpoint}/report/formulation/${formulationId}`, {...options,responseType: "blob"})
    }

    getReportPdfFormulation(formulationId:string){
      let options = { params: new HttpParams().set('uid', 'PjsC69VezAeJKlKlRmXW5Vkoq5Z2') }
      return this.http.get(`${this.endpoint}/report/document/formulation/${formulationId}`, {...options,responseType: "blob"})
    }

    getReportExcelRoomWork(processId: string){
      let options = { params: new HttpParams().set('uid', 'PjsC69VezAeJKlKlRmXW5Vkoq5Z2') }
      return this.http.get(`${this.endpoint}/report/document/process/${processId}`, {...options,responseType: "blob"})
    }

    getReportPdfRoomWork(processId: string){
      let options = { params: new HttpParams().set('uid', 'PjsC69VezAeJKlKlRmXW5Vkoq5Z2') }
      return this.http.get(`${this.endpoint}/report/process/${processId}`, {...options,responseType: "blob"})
    }

    getReportPdfOven(obj){
      let options = { params: new HttpParams().set('uid', 'PjsC69VezAeJKlKlRmXW5Vkoq5Z2') }
      return this.http.get(`${this.endpoint}/report/oven/${obj.dateStart}/${obj.dateEnd}`,{...options,responseType: "blob"})
    }

    getReportExcelOven(obj){
      let options = { params: new HttpParams().set('uid', 'PjsC69VezAeJKlKlRmXW5Vkoq5Z2') }
      return this.http.get(`${this.endpoint}/report/document/oven/${obj.dateStart}/${obj.dateEnd}`,{...options,responseType: "blob"})
    }

    getReporTPdfPackaging(packaginId){
      let options = { params: new HttpParams().set('uid', 'PjsC69VezAeJKlKlRmXW5Vkoq5Z2') }
      return this.http.get(`${this.endpoint}/report/packagin/${packaginId}`,{...options,responseType: "blob"})
    }

    getReporTExcelPackaging(packaginId){
      let options = { params: new HttpParams().set('uid', 'PjsC69VezAeJKlKlRmXW5Vkoq5Z2') }
      return this.http.get(`${this.endpoint}/report/document/packagin/${packaginId}`,{...options,responseType: "blob"})
    }

}
