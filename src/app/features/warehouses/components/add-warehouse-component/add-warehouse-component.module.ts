import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddWarehouseComponentComponent } from './add-warehouse-component.component';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [AddWarehouseComponentComponent],
  imports: [
    CommonModule,
    MatCardModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  FlexLayoutModule,MatButtonModule
  ],
  exports:[AddWarehouseComponentComponent]
})

export class AddWarehouseComponentModule { }
