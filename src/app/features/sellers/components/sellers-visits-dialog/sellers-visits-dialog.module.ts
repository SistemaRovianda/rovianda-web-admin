import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersVisitsDialogComponent } from './sellers-visits-dialog.component';
import { MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatProgressSpinnerModule, MatTableModule, MAT_DATE_LOCALE } from '@angular/material';
import { SellerService } from 'src/app/features/services/seller.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SellersConfirmDialogComponent } from '../sellers-confirm-dialog/sellers-confirm-dialog.component';
import { SellersConfirmDialogModule } from '../sellers-confirm-dialog/sellers-confirm-dialog.module';



@NgModule({
  declarations: [SellersVisitsDialogComponent],
  imports: [
    CommonModule,MatButtonModule,MatProgressSpinnerModule,MatTableModule,
    MatDatepickerModule,MatNativeDateModule,
    ReactiveFormsModule,MatFormFieldModule,
    MatInputModule,
    SellersConfirmDialogModule
  ],
  exports:[SellersVisitsDialogComponent],
  providers:[SellerService,{provide: MAT_DATE_LOCALE,  useValue: 'es-ES'}],
  entryComponents:[SellersConfirmDialogComponent]
})
export class SellersVisitsDialogModule { }
