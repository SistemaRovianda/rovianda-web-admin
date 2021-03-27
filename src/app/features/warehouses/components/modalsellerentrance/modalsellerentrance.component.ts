import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeliverToWarehouse, WarehouseModel } from 'src/app/features/models/mode-warehouse';
import { WarehouseService } from 'src/app/features/services/warehouse.service';
import { ModalOutputsGeneralComponent } from '../modal-outputs-general/modal-outputs-general.component';
import { ModalTypeReportComponent } from '../modal-type-report/modal-type-report.component';

@Component({
  selector: 'app-modalsellerentrance',
  templateUrl: './modalsellerentrance.component.html',
  styleUrls: ['./modalsellerentrance.component.scss']
})
export class ModalsellerentranceComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalsellerentranceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {warehouseModel:WarehouseModel},
    private warehouseService:WarehouseService,public dialog: MatDialog) { }
    isLoading=false;
    displayedColumns:string[]=["position","code","name","lot","units","weight","date"];
  dataSource:DeliverToWarehouse[]=[
  
  ];

  form:FormGroup;
  ngOnInit() {
    
    this.form = new FormGroup({
      from: new FormControl(null,[Validators.required]),
      to: new FormControl(null,[Validators.required])
    });
    
  }

  get from(){
    return this.form.get("from").value;
  }

  get to(){
    return this.form.get("to").value;
  }

  closeModal(){
    this.dialogRef.close();
  }

  buscar(){
    if(this.form.valid==true){
      let date1=new Date(this.from);
      let date2=new Date(this.to);
      // date1.setHours(date1.getHours()-6);
      // date2.setHours(date2.getHours()-6);
      
      this.isLoading=true;
      this.warehouseService.getRecordsOfDelivered(this.data.warehouseModel.CVE_ALM,this.getDateStr(date1),this.getDateStr(date2)).subscribe((records)=>{
        this.dataSource=records;
        this.isLoading=false;
      
      },
      (err)=>this.isLoading=false);

    }else{
      console.log("Invalido");
    }
  }

  getDateStr(date:Date){
    let month = (date.getMonth()+1).toString();
    let day= (date.getDate()).toString();
    if(+month<10) month="0"+month;
    if(+day<10) day="0"+day;
    return date.getFullYear()+"-"+month+"-"+day;
  }

  getReport(){
    if(this.form.valid==true){
      let date1=new Date(this.from);
      let date2=new Date(this.to);
      // date1.setHours(date1.getHours()-6);
      // date2.setHours(date2.getHours()-6);
      this.isLoading=true;
      this.warehouseService.getRecordsOfDeliveredReport(this.data.warehouseModel.CVE_ALM,this.getDateStr(date1),this.getDateStr(date2)).subscribe((records)=>{
        this.downloadFile(records,"EntregaAAlmacenes","pdf");
        this.isLoading=false;
      },
      (err)=>this.isLoading=false);
    }
  }

 
  getReportInventory(){
    this.isLoading=true;
    const dialog = this.dialog.open(ModalTypeReportComponent,{
      width: "40%",
      height: "40%",
      data:{
        warehouse: this.data.warehouseModel.CVE_ALM
      },
      disableClose:true
      });
    dialog.afterClosed().subscribe((result)=>{
      this.isLoading=false;
    });
  }

  openModalOutputsGeneral(){
    const dialog = this.dialog.open(ModalOutputsGeneralComponent,{
      width: "80%",
      height: "80%",
      data:{
        warehouse: this.data.warehouseModel.CVE_ALM
      },
      disableClose:true
      });
    dialog.afterClosed().subscribe((result)=>{
      
    });
  }

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