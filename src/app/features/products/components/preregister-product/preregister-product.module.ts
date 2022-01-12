import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreregisterProductComponent } from './preregister-product.component';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ModalConfirmDeleteModule } from '../modal-confirm-delete/modal-confirm-delete.module';
import { ModalConfirmDeleteComponent } from '../modal-confirm-delete/modal-confirm-delete.component';

@NgModule({
  declarations: [PreregisterProductComponent],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    ModalConfirmDeleteModule,
    MatIconModule
  ],
  exports:[PreregisterProductComponent],
  entryComponents:[ModalConfirmDeleteComponent]
})
export class PreregisterProductModule { }
