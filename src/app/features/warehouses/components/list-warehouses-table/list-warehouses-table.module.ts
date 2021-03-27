import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWarehousesTableComponent } from './list-warehouses-table.component';
import { MatButtonModule, MatTableModule } from '@angular/material';
import { ModalsellerentranceModule } from '../modalsellerentrance/modalsellerentrance.module';
import { ModalsellerentranceComponent } from '../modalsellerentrance/modalsellerentrance.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [ListWarehousesTableComponent],
  imports: [
    CommonModule,MatTableModule,MatButtonModule,ModalsellerentranceModule,
    MatDialogModule
  ],
  exports:[ListWarehousesTableComponent],
  entryComponents:[ModalsellerentranceComponent]
})
export class ListWarehousesTableModule { }
