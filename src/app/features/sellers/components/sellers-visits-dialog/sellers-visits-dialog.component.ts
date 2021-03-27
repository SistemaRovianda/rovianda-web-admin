import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MatTableDataSource, MAT_DIALOG_DATA } from '@angular/material';
import { Client, listSellerItem, VisitSeller } from 'src/app/features/models/models-seller';
import { SellerService } from 'src/app/features/services/seller.service';
import { SellersConfirmDialogComponent } from '../sellers-confirm-dialog/sellers-confirm-dialog.component';

@Component({
  selector: 'app-sellers-visits-dialog',
  templateUrl: './sellers-visits-dialog.component.html',
  styleUrls: ['./sellers-visits-dialog.component.scss']
})
export class SellersVisitsDialogComponent implements OnInit {
  currentDate:string="";
  constructor(private matRef:MatDialogRef<SellersVisitsDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:{seller:listSellerItem,mode:string},private sellerService:SellerService,private dialog:MatDialog) { 
    
    let date=new Date();
      date.setHours(date.getHours()-6);
      let month:string = (date.getMonth()+1).toString();
      let day:string = date.getDate().toString();
    if(+month<10){
        month="0"+month;
    }
    if(+day<10) day="0"+day;
    this.currentDate = date.getFullYear()+"-"+month+"-"+day;
  }
  displayedColumnsVisits:string[]=["no","name","keySae","visited","time"];
  displayedColumnsClients:string[]=["no","name","keySae","options"];
  isLoading:boolean=false;
  dataSourceVisits:MatTableDataSource<VisitSeller>;
  dataSourceClients:MatTableDataSource<Client>;
  form:FormGroup;
  ngOnInit() {
    this.isLoading = true;
    this.form=new FormGroup({
      from: new FormControl(null,Validators.required)
    });
    if(this.data.mode=="VISITS"){     
    this.dataSourceVisits = new MatTableDataSource();
    this.sellerService.getScheduleByDate(this.data.seller.id,this.currentDate).subscribe((visits:VisitSeller[])=>{
      this.dataSourceVisits.data=visits;
      this.isLoading=false;
    },(err)=>this.isLoading=false);
    }else if(this.data.mode=="CLIENTS"){
      this.dataSourceClients = new MatTableDataSource();
      this.sellerService.getAllClients(this.data.seller.id).subscribe((clients:Client[])=>{
        this.dataSourceClients.data=clients;
        this.isLoading=false;
      },(err)=>this.isLoading=false);
    }
  }

  buscar(){
    if(this.form.valid){
      this.isLoading=true;
      let date1=new Date(this.from);
      this.sellerService.getScheduleByDate(this.data.seller.id,this.getDateStr(date1)).subscribe((visits:VisitSeller[])=>{
        this.dataSourceVisits.data=visits;
        this.isLoading=false;
      },(err)=>this.isLoading=false);
    }
  }
  closeModal(){
    this.matRef.close();
  }

  deleteUser(element:Client){
    const deleteUserModal = this.dialog.open(SellersConfirmDialogComponent,{
      width: "400px",
      height: "200px",
      data:{
        user:element
      }
    });
    deleteUserModal.afterClosed().subscribe(()=>{
      console.log("modal cerrado");
    })
  }

  get from(){
    return this.form.get("from").value;
  }


  getDateStr(date:Date){
    let month = (date.getMonth()+1).toString();
    let day= (date.getDate()).toString();
    if(+month<10) month="0"+month;
    if(+day<10) day="0"+day;
    return date.getFullYear()+"-"+month+"-"+day;
  }
}
