import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmDeleteComponent } from './modal-confirm-delete.component';
import { MatButtonModule, MatProgressSpinnerModule } from '@angular/material';



@NgModule({
  declarations: [ModalConfirmDeleteComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [ModalConfirmDeleteComponent]
})
export class ModalConfirmDeleteModule { }
