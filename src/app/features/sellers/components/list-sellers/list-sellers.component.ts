import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { listSellerItem } from 'src/app/features/models/models-seller';
import { SellerService } from 'src/app/features/services/seller.service';
import { SellersVisitsDialogComponent } from '../sellers-visits-dialog/sellers-visits-dialog.component';

@Component({
  selector: 'app-list-sellers',
  templateUrl: './list-sellers.component.html',
  styleUrls: ['./list-sellers.component.scss']
})
export class ListSellersComponent implements OnInit {

  constructor(private dialog:MatDialog,private sellerService:SellerService) { 
    this.dataSource = new MatTableDataSource();
  }
  displayedColumns:string[]=["name","visits","clients"];
  dataSource:MatTableDataSource<listSellerItem>;
  isLoading=false;
  ngOnInit() {
    this.isLoading =true;
    this.sellerService.getAllSeller().subscribe((sellers:listSellerItem[])=>{
        this.dataSource.data = sellers;
        this.isLoading=false;
    },(err)=>this.isLoading=false)
  }
  seeVisits(sellerItem:listSellerItem){
    const dialogSeeVisits = this.dialog.open(SellersVisitsDialogComponent,{
      width: "60%",
      height:"50%",
      disableClose:true,
      data:{
        seller:sellerItem,
        mode:"VISITS"
      }
    });
    dialogSeeVisits.afterClosed().subscribe(()=>{
      console.log("se cerro modal");
    })
  }

  seeClients(sellerItem:listSellerItem){
    const dialogSeeVisits = this.dialog.open(SellersVisitsDialogComponent,{
      width: "60%",
      height:"50%",
      disableClose:true,
      data:{
        seller:sellerItem,
        mode:"CLIENTS"
      }
    });
    dialogSeeVisits.afterClosed().subscribe(()=>{
      console.log("se cerro modal");
    })
  }
}
