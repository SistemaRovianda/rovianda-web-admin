import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatTableDataSource, MAT_DIALOG_DATA, PageEvent } from '@angular/material';
import { ServicesClientsService } from 'src/app/features/services/services-clients.service';
import { SaleInterface } from 'src/app/features/shared/models/sale.interface';

@Component({
  selector: 'app-sales-client-modal',
  templateUrl: './sales-client-modal.component.html',
  styleUrls: ['./sales-client-modal.component.scss']
})
export class SalesClientModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{client:any},
  private dialogRef:MatDialogRef<SalesClientModalComponent>,
  private servicesClientsService:ServicesClientsService
  ) { }
  form:FormGroup;
  displayedColumns:string[]=["folio","date","amount","seller","options"];
  totalCount=0;
  page=0;
  perPage=10;
  dataSource:MatTableDataSource<SaleInterface>;
  
  pageChange(pageEvent:PageEvent){
    
  }
  searchSales(){
    if(this.form.valid){
      console.log(this.from.value);
      
      console.log(this.to.value);
      this.servicesClientsService.getSalesByClient(this.parseDate(this.from.value),this.parseDate(this.to.value),this.data.client.clients_client_id,this.page,this.perPage).subscribe((sales)=>{
        this.totalCount = +sales.headers.get("x-total-count")
        this.dataSource.data = sales.body as Array<SaleInterface>;
      })
    }
  }

  parseDate(dateStr:string){
    let date = new Date(dateStr);
    let month = (date.getMonth()+1).toString();
    let day =date.getDate().toString();
    if(+month<10){
      month="0"+month;
    }

    if(+day<10){
      day="0"+day;
    }
    return date.getFullYear().toString()+"-"+month+"-"+day;
  }
  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.form = new FormGroup({
      from: new FormControl(null,Validators.required),
      to: new FormControl(null,Validators.required)
    });
  }

  get from(){
    return this.form.get("from");
  }

  get to(){
    return this.form.get("to");
  }



  close(){
    this.dialogRef.close();
  }
}
