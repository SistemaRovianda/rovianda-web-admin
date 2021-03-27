import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersConfirmDialogComponent } from './sellers-confirm-dialog.component';
import { MatButtonModule, MatProgressSpinnerModule } from '@angular/material';



@NgModule({
  declarations: [SellersConfirmDialogComponent],
  imports: [
    CommonModule,MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports:[SellersConfirmDialogComponent]
})
export class SellersConfirmDialogModule { }
