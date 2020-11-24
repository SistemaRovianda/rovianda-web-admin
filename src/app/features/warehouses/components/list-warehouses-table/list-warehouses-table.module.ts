import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWarehousesTableComponent } from './list-warehouses-table.component';
import { MatTableModule } from '@angular/material';



@NgModule({
  declarations: [ListWarehousesTableComponent],
  imports: [
    CommonModule,MatTableModule
  ],
  exports:[ListWarehousesTableComponent]
})
export class ListWarehousesTableModule { }
