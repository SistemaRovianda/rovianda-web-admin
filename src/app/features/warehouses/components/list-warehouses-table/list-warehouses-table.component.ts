import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { WarehouseModel } from 'src/app/features/models/mode-warehouse';
import { WarehouseService } from 'src/app/features/services/warehouse.service';
import { ModalsellerentranceComponent } from '../modalsellerentrance/modalsellerentrance.component';

@Component({
  selector: 'app-list-warehouses-table',
  templateUrl: './list-warehouses-table.component.html',
  styleUrls: ['./list-warehouses-table.component.scss']
})
export class ListWarehousesTableComponent implements OnInit {

  constructor(private roviandaApi:WarehouseService,public dialog: MatDialog) { }

  warehouses:WarehouseModel[]=[];
  dataSource:MatTableDataSource<WarehouseModel>;
  displayedColumns:string[]=["no","key","description","owner","entranceDetails"];

  reload(){
    console.log("Reloading list");
    this.roviandaApi.getAllWarehousesActive().subscribe((warehouses)=>{
      this.warehouses = warehouses;
      this.dataSource.data =this.warehouses;
    })
  }

  ngOnInit() {
    this.dataSource=new MatTableDataSource();
    this.roviandaApi.getAllWarehousesActive().subscribe((warehouses)=>{
      this.warehouses = warehouses;
      this.dataSource.data =this.warehouses;
    })
  }

  openDialogDetailsEntrance(warehouseModel:WarehouseModel){
    const dialog = this.dialog.open(ModalsellerentranceComponent,{
      width: "80%",
      height: "80%",
      data:{
        warehouseModel
      },disableClose:true
      });
    dialog.afterClosed().subscribe((result)=>{
      console.log("Resultado del dialogo: "+result);
    });
  }


}
