import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSalesComponent } from './list-sales.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReportsModalModule } from '../components/reports-modal/reports-modal.module';
import { ReportsModalComponent } from '../components/reports-modal/reports-modal.component';
import { ModalTicketModule } from '../components/modal-ticket/modal-ticket.module';
import { ModalTicketComponent } from '../components/modal-ticket/modal-ticket.component';

@NgModule({
  declarations: [ListSalesComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReportsModalModule,
    MatDialogModule,
    MatButtonModule,
    ModalTicketModule,
    MatPaginatorModule
  ],
  exports:[ListSalesComponent],
  entryComponents: [ReportsModalComponent,ModalTicketComponent]
})
export class ListSalesModule { }
