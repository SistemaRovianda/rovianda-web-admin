import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeCodeComponent } from './change-code.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';



@NgModule({
  declarations: [ChangeCodeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  exports: [ChangeCodeComponent]
})
export class ChangeCodeModule { }
