import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private servicesClientsService:ServicesClientsService,private dialog:MatDialog) { 
    
  }
  page=0;
  perPage=10;
  totalCount=0;
  dataSource:MatTableDataSource<any>;
  displayedColumns:string[]=["name","rfc","credit","balance","sales"];
  form:FormGroup;
  pageChange(pageEvent:PageEvent){
    this.page = pageEvent.pageIndex;
    this.servicesClientsService.getListOfClient(this.page,this.perPage,this.nameToFind).subscribe((response:HttpResponse<Object>)=>{
      this.totalCount=+response.headers.get("x-total-count");
      //console.log(response.body);
      this.dataSource.data=response.body as Array<any>;
  });
  }
  nameToFind:string=null;
  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.form = new FormGroup({
      name: new FormControl(null,Validators.required)
    });
    this.search();
  }

  search(){
    this.dataSource.data=[];
    this.servicesClientsService.getListOfClient(this.page,this.perPage,this.nameToFind).subscribe((response:HttpResponse<Object>)=>{
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

  get name(){
    return this.form.get("name");
  }
  filtered=false;
  searchByName(){
    if(this.form.valid){
      if(!this.filtered){
      this.filtered=true;
      this.nameToFind=this.name.value;
      }else{
        this.filtered=false;
        this.nameToFind=null;
        this.name.setValue(null);
      }
      this.search();
    }
    
  }


}
