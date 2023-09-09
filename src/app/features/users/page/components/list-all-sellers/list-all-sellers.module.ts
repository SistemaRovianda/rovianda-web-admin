import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAllSellersComponent } from './list-all-sellers.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ListAllSellersComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[ListAllSellersComponent]
})
export class ListAllSellersModule { }
