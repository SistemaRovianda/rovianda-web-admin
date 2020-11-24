import { Component, OnInit, ViewChild } from '@angular/core';
import { ListWarehousesTableComponent } from '../components/list-warehouses-table/list-warehouses-table.component';

@Component({
  selector: 'app-create-warehouse',
  templateUrl: './create-warehouse.component.html',
  styleUrls: ['./create-warehouse.component.scss']
})
export class CreateWarehouseComponent implements OnInit {

  constructor() { }
@ViewChild("list",{static:true}) list:ListWarehousesTableComponent;
  ngOnInit() {
  }

  realoadList(){
this.list.reload();
}

}
