import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource, PageEvent } from '@angular/material';
import { ClientSAE } from 'src/app/features/models/model-clients';
import { ServicesClientsService } from 'src/app/features/services/services-clients.service';
import { SalesClientModalComponent } from '../../components/sales-client-modal/sales-client-modal.component';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  constructor(private servicesClientsService:ServicesClientsService,private dialog:MatDialog) { }
  page=0;
  perPage=10;
  totalCount=0;
  dataSource:MatTableDataSource<any>;
  displayedColumns:string[]=["name","rfc","credit","balance","sales"];
  pageChange(pageEvent:PageEvent){
    this.page = pageEvent.pageIndex;
    this.servicesClientsService.getListOfClient(this.page,this.perPage).subscribe((response:HttpResponse<Object>)=>{
      this.totalCount=+response.headers.get("x-total-count");
      //console.log(response.body);
      this.dataSource.data=response.body as Array<any>;
  });
  }
  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.data=[];
    this.servicesClientsService.getListOfClient(this.page,this.perPage).subscribe((response:HttpResponse<Object>)=>{
        this.totalCount=+response.headers.get("x-total-count");
        //console.log(response.body);
        this.dataSource.data=response.body as Array<any>;
    });
  }

  showSales(index){
    const dialog = this.dialog.open(SalesClientModalComponent,{
      data:{
        client: this.dataSource.data[index]
      },
      disableClose:true
    });
  
  }

}
