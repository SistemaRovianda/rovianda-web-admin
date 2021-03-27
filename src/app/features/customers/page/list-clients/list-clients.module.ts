import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientsComponent } from './list-clients.component';
import { MatButtonModule, MatDialogModule, MatInputModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { SalesClientModalModule } from '../../components/sales-client-modal/sales-client-modal.module';
import { SalesClientModalComponent } from '../../components/sales-client-modal/sales-client-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListClientsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    SalesClientModalModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports:[ListClientsComponent],
  entryComponents:[SalesClientModalComponent]
})
export class ListClientsModule { }
