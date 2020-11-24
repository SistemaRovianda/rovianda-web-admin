import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateWarehouseComponent } from './create-warehouse.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';
import { AddWarehouseComponentModule } from '../components/add-warehouse-component/add-warehouse-component.module';
import { ListWarehousesTableModule } from '../components/list-warehouses-table/list-warehouses-table.module';




@NgModule({
  declarations: [CreateWarehouseComponent],
  imports: [
    CommonModule,FlexLayoutModule,MatCardModule,AddWarehouseComponentModule,ListWarehousesTableModule
  ],
  exports:[CreateWarehouseComponent]
})
export class CreateWarehouseModule { }
