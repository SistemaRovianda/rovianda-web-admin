import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { WarehouseService } from 'src/app/features/services/warehouse.service';

@Component({
  selector: 'app-modal-type-report',
  templateUrl: './modal-type-report.component.html',
  styleUrls: ['./modal-type-report.component.scss']
})
export class ModalTypeReportComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {warehouse:number},private warehouseService:WarehouseService,private modalR:MatDialogRef<ModalTypeReportComponent>) { }

  ngOnInit() {
  }

  select(type:string){
    this.disabled=true;
    this.warehouseService.getRecordsOfInventoryReport(this.data.warehouse,type).subscribe((records)=>{
      this.disabled=false;
      this.downloadFile(records,"Inventario",type=="pdf"?"pdf":"xlsx");
      this.exit();
    },
    (err)=>{
      this.disabled=false;
      this.exit()});
  }

  exit(){
    this.modalR.close();
  }

  disabled=false;

  downloadFile(data: any, title: string, exten: string) {
    var url = window.URL.createObjectURL(new Blob([data]));
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.setAttribute("style", "display: none");
    a.href = url;
    a.download = `${title}.${exten}`;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove(); // remove the element
  }

}
