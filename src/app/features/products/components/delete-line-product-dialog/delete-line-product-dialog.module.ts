import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteLineProductDialogComponent } from './delete-line-product-dialog.component';
import { MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [DeleteLineProductDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[
    DeleteLineProductDialogComponent
  ]
})
export class DeleteLineProductDialogModule { }
