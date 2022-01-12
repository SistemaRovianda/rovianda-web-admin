import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsEditsComponent } from './list-products-edits.component';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreregisterProductModule } from '../preregister-product/preregister-product.module';
import { PreregisterProductComponent } from '../preregister-product/preregister-product.component';



@NgModule({
  declarations: [ListProductsEditsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    PreregisterProductModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  exports:[ListProductsEditsComponent],
  entryComponents:[PreregisterProductComponent]
})
export class ListProductsEditsModule { }
