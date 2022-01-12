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
  warehouseType:number=0;
  constructor(public dialogRef: MatDialogRef<ModalsellerentranceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {warehouseModel:WarehouseModel},
    private warehouseService:WarehouseService,public dialog: MatDialog) { 
      this.warehouseType=+this.data.warehouseModel.CVE_ALM;
      if(this.warehouseType==53){
        this.displayedColumns=["position","code","name","lot","units","weight","date"];
      }else{
        this.displayedColumns=["position","code","name","units","weight","price","total"];
      }
    }
    isLoading=false;
    displayedColumns:string[];
  dataSource:DeliverToWarehouse[]=[
  
  ];
  form2:FormGroup;
  form:FormGroup;
  ngOnInit() {
    
    this.form = new FormGroup({
      from: new FormControl(null,[Validators.required]),
      to: new FormControl(null,[Validators.required])
    });
    this.form2=new FormGroup({
      type: new FormControl('acumulated',[Validators.required])
    });

    this.form2.valueChanges.subscribe((newVal)=>{
      if(this.warehouseType!=53){
        
      if(newVal.type=='acumulated'){
        this.displayedColumns=["position","code","name","units","weight","price","total"];
      }else{
        this.displayedColumns=["position","code","name","lot","units","weight","price","total","date"];
      }
      
    }else{
      this.displayedColumns=["position","code","name","lot","units","weight","date"];
    }
    })
    
  }

  get type(){
    return this.form2.get("type");
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
      this.warehouseService.getRecordsOfDelivered(this.data.warehouseModel.CVE_ALM,this.getDateStr(date1),this.getDateStr(date2),this.type.value).subscribe((records)=>{
        this.dataSource=records.map(x=>{
          x.WEIGHT=+x.WEIGHT.toFixed(2); 
          return x
        });
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

  // getReport(){
  //   if(this.form.valid==true){
 
  //     this.isLoading=true;
  //     this.warehouseService.getRecordsOfDeliveredReport(this.data.warehouseModel.CVE_ALM,this.getDateStr(date1),this.getDateStr(date2),this.type.value).subscribe((records)=>{
  //       this.downloadFile(records,"EntregaAAlmacenes","pdf");
  //       this.isLoading=false;
  //     },
  //     (err)=>this.isLoading=false);
  //   }
  // }

 
  getReport(type:number){
    this.isLoading=true;
    if(type==1){
      let date1=new Date(this.from);
      let date2=new Date(this.to);
      const dialog = this.dialog.open(ModalTypeReportComponent,{
        width: "40%",
        height: "40%",
        data:{
          warehouse: this.data.warehouseModel.CVE_ALM,
          type,
          dateStart:this.getDateStr(date1),
          dateEnd: this.getDateStr(date2),
          typeReport: this.type.value
        },
        disableClose:true
        });
      dialog.afterClosed().subscribe((result)=>{
        this.isLoading=false;
      });
    }else if(type==2){
      const dialog = this.dialog.open(ModalTypeReportComponent,{
        width: "40%",
        height: "40%",
        data:{
          warehouse: this.data.warehouseModel.CVE_ALM,
          type
        },
        disableClose:true
        });
      dialog.afterClosed().subscribe((result)=>{
        this.isLoading=false;
      });
    }
    
    
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