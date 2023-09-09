import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatTableDataSource, PageEvent } from '@angular/material';
import { ClientSAE } from 'src/app/features/models/model-clients';
import { SellerService } from 'src/app/features/services/seller.service';
import { ServicesClientsService } from 'src/app/features/services/services-clients.service';
import { ChangeCodeComponent } from '../../components/change-code/change-code.component';
import { SalesClientModalComponent } from '../../components/sales-client-modal/sales-client-modal.component';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  constructor(private servicesClientsService:ServicesClientsService,private dialog:MatDialog,private sellerService:SellerService) { 
    
  }
  page=0;
  perPage=10;
  totalCount=0;
  dataSource:MatTableDataSource<any>;
  displayedColumns:string[]=["name","sellerName","code","aspelcode","rfc","credit","balance","sales"];
  form:FormGroup;
  sellersList:any[]=[];
  isLoading:boolean=false;
  pageChange(pageEvent:PageEvent){
    this.page = pageEvent.pageIndex;
    this.servicesClientsService.getListOfClient(this.page,this.perPage,this.hint.value,this.typeFilter.value,this.sellerId.value).subscribe((response:HttpResponse<Object>)=>{
      this.totalCount=+response.headers.get("x-total-count");
      //console.log(response.body);
      this.dataSource.data=response.body as Array<any>;
    });
    
  }

  get typeFilter(){
    return this.form.get("typeFilter");
  }
  get sellerId(){
    return this.form.get("sellerId");
  }
  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.form = new FormGroup({
      hint: new FormControl(""),
      sellerId: new FormControl(null,Validators.required),
      typeFilter: new FormControl("NAME",Validators.required)
    });
    this.search();
    this.sellerService.getListOfSellers().subscribe((sellers)=>{
      this.sellersList=[{id:"0",name:"Todos"},...sellers.sort((a,b)=>a.name.localeCompare(b.name))];
    });
  }

  search(){
    this.dataSource.data=[];
    this.servicesClientsService.getListOfClient(this.page,this.perPage,this.hint.value,this.typeFilter.value,this.sellerId.value).subscribe((response:HttpResponse<Object>)=>{
        this.totalCount=+response.headers.get("x-total-count");
        //console.log(response.body);
        this.dataSource.data=response.body as Array<any>;
    });
  }

  showSales(index){
    const dialog = this.dialog.open(SalesClientModalComponent,{
      width: "800px",
      data:{
        client: this.dataSource.data[index]
      },
      disableClose:true
    });
  
  }

  get hint(){
    return this.form.get("hint");
  }
  filtered=false;
  searchByName(){
    if(this.form.valid){
      
      this.search();
    }
    
  }

  changeCode(client:any){
    this.dialog.open(ChangeCodeComponent,{
      data: {
        client
      }
    }).afterClosed().subscribe(()=>{
      this.search();
    });
  }

  downloadReport(format:string){
    if(this.form.valid){
      this.isLoading=true;
        this.sellerService.getListOfClientReport(format,this.hint.value,this.typeFilter.value,this.sellerId.value).subscribe((blob)=>{
          this.isLoading=false;
          this.downloadFile(blob,"ReporteClientes",format=="PDF"?"pdf":"xlsx");
        },err=>{
          this.isLoading=false;
        });
    }
  }


  downloadFile(data: any, title: string, exten: string) {
    var url = window.URL.createObjectURL(new Blob([data]));

    // Debe haber una manera mejor de hacer esto...
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
