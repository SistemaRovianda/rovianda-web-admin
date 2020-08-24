import { Component, OnInit } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { HistoriesService } from 'src/app/features/services/histories.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MessagesComponent } from '../../components/messages/messages.component';
import { ReportsService } from 'src/app/features/services/reports.service';

@Component({
  selector: "app-history",
  templateUrl: "./history.page.html",
  styleUrls: ["./history.page.scss"]
})
export class HistoryPageComponent implements OnInit {
  documentsMeat$: any;
  documentsDrief$: any;
  documentsPacking$: any;
  hasDrief$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  hasPackaging$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  hasMeat$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  // query$: Observable<string>;

  drief: any;
  packaging: any;
  meat: any;
  objdate: any = {};
  constructor(
    private serviceHistories: HistoriesService,
    private serviceRoports: ReportsService,
    public dialog: MatDialog) {

  }

  ngOnInit() { }
  objSearch(event: any) {
    if (event.typeSearch == 'DRIEF') {
      this.hasDrief$.next(true);
      this.hasPackaging$.next(false);
      this.hasMeat$.next(false);
      this.getHistoryDrief(event.query);
      this.getDocumentsDrief(event.query);
    } else if (event.typeSearch == 'PACKING') {
      this.hasDrief$.next(false);
      this.hasPackaging$.next(true);
      this.hasMeat$.next(false);
      this.getHistoryPackaging(event.query);
      this.getDocumentsPacking(event.query);
    } else if (event.typeSearch == 'MEAT') {
      this.hasDrief$.next(false);
      this.hasPackaging$.next(false);
      this.hasMeat$.next(true);
      this.getHistoryMeat(event.query);
      this.getDocumentsMeat(event.query);
    }
  }
  getDocumentsDrief(DocumentsId: string) {
    this.documentsMeat$=undefined;
  this.documentsPacking$=undefined;
    this.documentsDrief$ = [
      { name: "Recepción de materia prima secos", id: DocumentsId },
      { name: "Bitácora de control de pep's almacén", id: DocumentsId },
    ];
  }
  getDocumentsMeat(DocumentsId: string) {
    this.documentsDrief$=undefined;
    this.documentsPacking$=undefined;
    this.documentsMeat$ = [
      { name: "Recepcion materia prima cárnicos", id: DocumentsId },
      { name: "Bitácora de control de calidad formulación", id: DocumentsId },
      { name: "Bitácora de control de calidad sala de trabajo", id: DocumentsId },
      { name: "Bitácora de control de calidad cocimiento del producto", id: DocumentsId },
      { name: "Bitácora de control de rebanado y empacado", id: DocumentsId },
      { name: "Inspección de producto terminado y salida", id: DocumentsId }
    ];
  }
  getDocumentsPacking(DocumentsId: string) {
    this.documentsMeat$=undefined;
    this.documentsDrief$=undefined;
    this.documentsPacking$ = [
      { name: "Bitácora de control de calidad almacén empaques", id: DocumentsId },
    ];
  }

  async getHistoryPackaging(loteId: string) {
    await this.serviceHistories.getHistoryPackaging(loteId).subscribe(data => this.packaging = data, (err) => {
      this.openDialog(
        { title: 'Resultados', msg: `No se encontro ninguna búsqueda con el lote: ${loteId}` })
      this.drief = undefined;
      this.packaging = undefined
      this.meat = undefined
    })
  }

  async getHistoryDrief(loteId: string) {
    await this.serviceHistories.getHistoryDrief(loteId).subscribe(data => this.drief = data, (err) => {
      this.openDialog(
        { title: 'Resultados', msg: `No se encontro ninguna búsqueda con el lote: ${loteId}` })
      this.drief = undefined;
      this.packaging = undefined
      this.meat = undefined
    })
  }

  async getHistoryMeat(loteId: string) {
    await this.serviceHistories.getHistoryMeat(loteId).subscribe(data => this.meat = data, (err) => {
      this.openDialog(
        { title: 'Resultados', msg: `No se encontro ninguna búsqueda con el lote: ${loteId}` })
      this.drief = undefined;
      this.packaging = undefined
      this.meat = undefined
    })
  }

  openDialog(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    this.dialog.open(MessagesComponent, dialogConfig);
  }

  objdates(event) {
    this.objdate = event;
  }

  downloadFileDrief(event) {
    if (event.name == 'Recepción de materia prima secos') {
      if (event.type == 'Excel') {
        this.serviceRoports.getReportExcelEntranceDrief('114').subscribe((data) => {
          this.downloadFile(data, event.name, 'xlsx')
          console.log(data)
        })
      } else if (event.type == 'pdf') {
        this.serviceRoports.getReportpdfentranceDrief('114').subscribe((data) => {
          this.downloadFile(data, event.name, 'pdf')
          console.log(data);
        })
      }
    } else if (event.name == 'Bitácora de control de pep\'s almacén') {
      if (event.type == 'Excel' && Object.keys(this.objdate).length) {
        this.serviceRoports.getReportExcelPepsDrief(this.objdate).subscribe((data) => {
          this.downloadFile(data, event.name, 'xlsx')
        })
      } else if (event.type == 'pdf' && Object.keys(this.objdate).length) {
        this.serviceRoports.getReportPdfPepsDrief(this.objdate).subscribe((data) => {
          this.downloadFile(data, event.name, 'pdf')
        })
      } else {
        this.openDialog(
          { title: 'Error', msg: `Faltan datos para generar este reporte.` }
        )
      }
    }
  }

  downloadFilePacking(event) {
    console.log(event)
    if (event.type == 'pdf') {
      if (Object.keys(this.objdate).length) {
        this.serviceRoports.getReportPDFpackingDates(this.objdate).subscribe((data) => {
          this.downloadFile(data, event.name, 'pdf')
        })
      } else {
        this.serviceRoports.getReportPDFPackingForId('84').subscribe((data) => {
          this.downloadFile(data, event.name, 'pdf')
        })
      }
    } else if (event.type == 'Excel') {
      if (Object.keys(this.objdate).length) {
        this.serviceRoports.getReportExcelPackingDates(this.objdate).subscribe((data) => {
          this.downloadFile(data, event.name, 'xlsx')
        })
      } else {
        this.serviceRoports.getReportExcelPackingForId('84').subscribe((data) => {
          this.downloadFile(data, event.name, 'xlsx')
        })
      }
    }
  }

  async downloadFileMeat(event){
    if(event.name == 'Recepcion materia prima cárnicos'){
      await this.downloadReception(event);
    }else if(event.name == 'Bitácora de control de calidad formulación'){
      await this.downloadformulation(event)
    }else if(event.name == 'Bitácora de control de calidad sala de trabajo'){
      await this.downloadRoomWork(event);
    }else if(event.name == 'Bitácora de control de calidad cocimiento del producto'){
      await this.downloadProductOven(event)
    }else if(event.name == 'Bitácora de control de rebanado y empacado'){
      await this.downloadPackaging(event)
    }else if(event.name == 'Inspección de producto terminado y salida'){
      await this.downloadInspection(event)
    }
  }

  downloadReception(event){
    if(event.type == 'Excel'){
      this.serviceRoports.getReportExcelReception('86').subscribe((data)=>{
        this.downloadFile(data, event.name, 'xlsx');
      })
    }else if (event.type == 'pdf'){
      this.serviceRoports.getReportPdfReception('86').subscribe((data)=>{
        this.downloadFile(data, event.name, 'pdf');
      })
    }
  }

  downloadformulation(event){
    if(event.type == 'Excel'){
      this.serviceRoports.getReportExcelFormulation('').subscribe((data)=>{
        this.downloadFile(data, event.name, 'xlsx');
      })
    }else if (event.type == 'pdf'){
      this.serviceRoports.getReportPdfFormulation('').subscribe((data)=>{
        this.downloadFile(data, event.name, 'pdf');
      })
    }
  }
  downloadRoomWork(event){
    if(event.type == 'Excel'){
      this.serviceRoports.getReportExcelRoomWork('').subscribe((data)=>{
        this.downloadFile(data, event.name, 'xlsx');
      })
    }else if (event.type == 'pdf'){
      this.serviceRoports.getReportPdfRoomWork('').subscribe((data)=>{
        this.downloadFile(data, event.name, 'pdf');
      })
    }
  }
  downloadProductOven(event){
    if(Object.keys(this.objdate).length){
      if(event.type == 'Excel'){
        this.serviceRoports.getReportExcelOven(this.objdate).subscribe((data)=>{
          this.downloadFile(data, event.name, 'xlsx');
        })
      }else if (event.type == 'pdf'){
        this.serviceRoports.getReportPdfOven(this.objdate).subscribe((data)=>{
          this.downloadFile(data, event.name, 'pdf');
        })
      }
    }else{
      this.openDialog({ title: 'Error', msg: `Faltan datos para generar este reporte. Ingrese las fechas por favor.` })
    }
  }

  downloadPackaging(event){
    if(event.type == 'Excel'){
      this.serviceRoports.getReporTPdfPackaging('').subscribe((data)=>{
        this.downloadFile(data, event.name, 'xlsx');
      })
    }else if (event.type == 'pdf'){
      this.serviceRoports.getReporTPdfPackaging('').subscribe((data)=>{
        this.downloadFile(data, event.name, 'pdf');
      })
    }
  }

  downloadInspection(event){
    if(event.type == 'Excel'){

    }else if (event.type == 'pdf'){
      
    }
  }

  downloadFile(data: any, title: string, exten: string) {
    var url = window.URL.createObjectURL(new Blob([data]));

    // Debe haber una manera mejor de hacer esto...
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.href = url;
    a.download = `${title}.${exten}`;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove(); // remove the element
  }
}
