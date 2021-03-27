import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatTableDataSource } from '@angular/material';
import { catchError } from 'rxjs/operators';
import { DeviveryFromMainWarehouse } from 'src/app/features/models/mode-warehouse';
import { WarehouseService } from 'src/app/features/services/warehouse.service';

@Component({
  selector: 'app-modal-outputs-general',
  templateUrl: './modal-outputs-general.component.html',
  styleUrls: ['./modal-outputs-general.component.scss']
})
export class ModalOutputsGeneralComponent implements OnInit {

  constructor(public dialog:MatDialogRef<ModalOutputsGeneralComponent>,private warehouseService:WarehouseService) { }
  form:FormGroup;
  isLoading:boolean=false;
  dataSource:MatTableDataSource<DeviveryFromMainWarehouse>;
  displayedColumns:string[] =["seller","code","name","presentation","loteId","units","weight","outputDate"];
  ngOnInit() {
    this.dataSource=new MatTableDataSource();
    this.form= new FormGroup({
      from: new FormControl(null,Validators.required),
      to: new FormControl(null,Validators.required)
    })
  }

  get from(){
    return this.form.get("from");
  }
  get to(){
    return this.form.get("to");
  }

  buscar(){
    if(this.form.valid){
      this.isLoading=true;
      
      let date1= new Date(this.from.value);
      let date2= new Date(this.to.value);
      let from = this.getDateStr(date1);
      let to = this.getDateStr(date2);
     //console.log(from,to);
      this.warehouseService.getAllOutputsToSellerFromMainWarehouse(from,to).subscribe((outputs)=>{
        this.isLoading=false;
        this.dataSource.data=outputs;
      },err=>{
        this.isLoading=false;
      });
    }
  }


  getReport(type:string){
    if(this.form.valid==true){
      let date1= new Date(this.from.value);
      let date2= new Date(this.to.value);
      let from = this.getDateStr(date1);
      let to = this.getDateStr(date2);
      this.isLoading=true;
      this.warehouseService.getReportOutputsOfPlant(from,to,type).subscribe((records)=>{
        this.downloadFile(records,"EntregaPlanta",type=="excel"?"xlsx":"pdf");
        this.isLoading=false;
      },
      (err)=>this.isLoading=false);
    }
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
  


  getDateStr(date:Date){
    let month = (date.getMonth()+1).toString();
    let day= (date.getDate()).toString();
    if(+month<10) month="0"+month;
    if(+day<10) day="0"+day;
    return date.getFullYear()+"-"+month+"-"+day;
  }

  cancel(){
      this.dialog.close();
  }
}
