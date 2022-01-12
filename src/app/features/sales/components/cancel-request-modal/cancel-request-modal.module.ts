import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelRequestModalComponent } from './cancel-request-modal.component';
import { MatButtonModule, MatProgressSpinnerModule } from '@angular/material';



@NgModule({
  declarations: [CancelRequestModalComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [CancelRequestModalComponent]
})
export class CancelRequestModalModule { }
