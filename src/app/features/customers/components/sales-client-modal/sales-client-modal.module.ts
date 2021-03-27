import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesClientModalComponent } from './sales-client-modal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule, MAT_DATE_LOCALE } from '@angular/material';
import {MatNativeDateModule} from '@angular/material/core';



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
    MatPaginatorModule
  ],
  exports:[SalesClientModalComponent],
  providers:[
    {provide: MAT_DATE_LOCALE, useValue: 'es-mx'}
  ]
})
export class SalesClientModalModule { }
