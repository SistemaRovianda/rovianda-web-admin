import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SaleRequest } from '../../models/models-sales-request';
import { Sale } from '../../models/models-seller';
import { PlantService } from '../../services/plant.service';
import { CancelRequestModalComponent } from '../components/cancel-request-modal/cancel-request-modal.component';
import { DevolutionRequestModalComponent } from '../components/devolution-request-modal/devolution-request-modal.component';

@Component({
  selector: 'app-sales-request',
  templateUrl: './sales-request.component.html',
  styleUrls: ['./sales-request.component.scss']
})
export class SalesRequestComponent implements OnInit {

  constructor(private roviandaApiService:PlantService,private dialog:MatDialog) { }
  isLoading:boolean=false;
  form:FormGroup;
  currentDate:string="";
  displayedColumns:string[]=["position","sellerName","folio","saleDate","requestDate","options"];
  requests:SaleRequest[]=[];
  dataSource:MatTableDataSource<SaleRequest>;
  dateStart:string="";
  dateEnd:string="";
  pageIndex:number=0;
  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.currentDate = this.parseDate(new Date());
    this.form = new FormGroup({
      typeRequest: new FormControl('CANCELATIONS',Validators.required),
      status: new FormControl('PENDING',Validators.required),
      date: new FormControl(null)
    });
    this.date.valueChanges.subscribe((val)=>{
        this.currentDate = this.parseDate(new Date(val));
    });
    this.search();
  }

  
  get typeRequest(){
    return this.form.get("typeRequest");
  }

  get status(){
    return this.form.get("status");
  }

  get date(){
    return this.form.get("date");
  }
  parseDate(date:Date){
    let month=((date.getMonth()+1)<10)?'0'+(date.getMonth()+1):date.getMonth()+1;
    let day=(date.getDate()<10)?'0'+date.getDate():date.getDate();
    return date.getFullYear()+'-'+month+'-'+day;
  }
  parseDateWithHour(date:string){
    let dateSplited = date.split("T");
    let dateStr = dateSplited[0];
    let hoursSplited=  dateSplited[1].split(":");
    return dateStr+" "+hoursSplited[0]+":"+hoursSplited[1];
  }
  search(){
    if(!this.isLoading){
      if(this.typeRequest.value=="CANCELATIONS"){
        this.isLoading=true;
        this.roviandaApiService.getSaleCancelationsRequestByType(this.status.value,this.currentDate,this.currentDate).subscribe((response)=>{
            this.dataSource.data=response.body as SaleRequest[];
            this.isLoading=false;
        },()=>{
          this.isLoading=false;
        });
      }else if(this.typeRequest.value=="DEVOLUTIONS"){
        this.isLoading=true;
        this.roviandaApiService.getSaleDevolutionsRequestByType(this.status.value,this.currentDate,this.currentDate).subscribe((response)=>{
          this.dataSource.data=response.body as SaleRequest[];
          this.isLoading=false;
      },()=>{
        this.isLoading=false;
      });
      }
    }
    // if(this.typeRequest=="CANCELATIONS"){

    // }
    //this.roviandaApiService.
  }

  checkRequestSale(sale:SaleRequest){
    if(!this.isLoading){
      if(this.typeRequest.value=="CANCELATIONS"){
        this.dialog.open(CancelRequestModalComponent,{
          data:{
            saleId: sale.saleId,
            requestStatus: sale.status
          }
        }).afterClosed().subscribe(()=>{
          this.search();
        });
      }else if(this.typeRequest.value=="DEVOLUTIONS"){
        this.dialog.open(DevolutionRequestModalComponent,{
          data:{
            saleId: sale.saleId
          },
          width: "70%"
        }).afterClosed().subscribe(()=>{
          this.search();
        });
      }
    }
  }

}
