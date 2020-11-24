import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { WarehouseModel } from 'src/app/features/models/mode-warehouse';
import { WarehouseService } from 'src/app/features/services/warehouse.service';

@Component({
  selector: 'app-list-warehouses-table',
  templateUrl: './list-warehouses-table.component.html',
  styleUrls: ['./list-warehouses-table.component.scss']
})
export class ListWarehousesTableComponent implements OnInit {

  constructor(private roviandaApi:WarehouseService) { }

  warehouses:WarehouseModel[]=[];
  dataSource:MatTableDataSource<WarehouseModel>;
  displayedColumns:string[]=["no","key","description","owner"];

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

}
