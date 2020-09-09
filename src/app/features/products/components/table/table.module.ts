import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { RouterModule } from '@angular/router';

//angular material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@NgModule({
  declarations: [TableComponent,DialogComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    RouterModule
  ],
  exports:[
    TableComponent,
    DialogComponent
  ],
  entryComponents:[
    DialogComponent 
  ]
})
export class TableModule { }
