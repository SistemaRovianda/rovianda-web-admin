import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepicker, MatDialog, MatPaginator, MatTableDataSource, PageEvent } from '@angular/material';
import { Sale } from '../../models/models-seller';
import { PlantService } from '../../services/plant.service';
import { ModalTicketComponent } from '../components/modal-ticket/modal-ticket.component';
import { ReportsModalComponent } from '../components/reports-modal/reports-modal.component';

@Component({
  selector: 'app-list-sales',
  templateUrl: './list-sales.component.html',
  styleUrls: ['./list-sales.component.scss']
})
export class ListSalesComponent implements OnInit {

  constructor(private dialog:MatDialog,private roviandaApiService:PlantService) { }
  form:FormGroup;
  isLoading:boolean=false;
  currentDate="";
  displayedColumns: string[] = ['position', 'folio', 'sellerName', 'date','amount','options'];
  sales:Sale[]=[];
  totalCount:number=0;
  pageIndex:number=0;
  dataSource:MatTableDataSource<Sale>;
  @ViewChild("paginator",{static:true}) paginator:MatPaginator;
  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel="Ventas por página";
    this.currentDate = this.parseDate(new Date());
    this.dataSource=new MatTableDataSource();
    this.form = new FormGroup({
      hint: new FormControl(""),
      date: new FormControl(null)
    });
    this.date.valueChanges.subscribe((val)=>{
        this.currentDate = this.parseDate(new Date(val));
    });
    this.search();
  }

  get date(){
    return this.form.get("date");
  }
  get folio(){
    return this.form.get("hint");
  }

  searchByHint(){
    this.paginator.firstPage();
    this.search();
  }
  search(){
    this.isLoading=true;
    this.roviandaApiService.getAllSales(this.pageIndex,10,[],this.currentDate,this.folio.value).subscribe((response)=>{
      this.totalCount = +response.headers.get("x-total-count");
      this.sales=response.body as Sale[];
      this.dataSource.data=this.sales;
      this.isLoading=false;
    },()=>this.isLoading=false);
  }
  parseDate(date:Date){
    let month=((date.getMonth()+1)<10)?'0'+(date.getMonth()+1):date.getMonth()+1;
    let day=(date.getDate()<10)?'0'+date.getDate():date.getDate();
    return date.getFullYear()+'-'+month+'-'+day;
  }

  reports(){
      this.dialog.open(ReportsModalComponent);
  }
 
  checkTicket(sale:Sale){
    this.dialog.open(ModalTicketComponent,{
      data:{
        sale
      }
    });
  }

  paginate(eventPage:PageEvent){ 
    this.pageIndex=eventPage.pageIndex;
    this.search();
  }

}
