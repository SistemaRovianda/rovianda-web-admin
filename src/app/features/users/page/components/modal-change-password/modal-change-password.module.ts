import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalChangePasswordComponent } from './modal-change-password.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ModalChangePasswordComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  exports: [ModalChangePasswordComponent]
})
export class ModalChangePasswordModule { }
