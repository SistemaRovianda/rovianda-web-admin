import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesClientModalComponent } from './sales-client-modal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule, MAT_DATE_LOCALE } from '@angular/material';
import {MatNativeDateModule} from '@angular/material/core';
import { TicketModalModule } from '../ticket-modal/ticket-modal.module';
import { TicketModalComponent } from '../ticket-modal/ticket-modal.component';



@NgModule({
  declarations: [SalesClientModalComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    TicketModalModule
  ],
  exports:[SalesClientModalComponent],
  entryComponents:[TicketModalComponent],
  providers:[
    {provide: MAT_DATE_LOCALE, useValue: 'es-mx'}
  ]
})
export class SalesClientModalModule { }
