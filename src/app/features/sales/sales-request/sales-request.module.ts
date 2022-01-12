import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRequestComponent } from './sales-request.component';
import { MatButtonModule, MatDatepicker, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatProgressSpinnerModule, MatSelectModule, MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CancelRequestModalModule } from '../components/cancel-request-modal/cancel-request-modal.module';
import { CancelRequestModalComponent } from '../components/cancel-request-modal/cancel-request-modal.component';
import { DevolutionRequestModalModule } from '../components/devolution-request-modal/devolution-request-modal.module';
import { DevolutionRequestModalComponent } from '../components/devolution-request-modal/devolution-request-modal.component';



@NgModule({
  declarations: [SalesRequestComponent],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatButtonModule,
    CancelRequestModalModule,
    DevolutionRequestModalModule
  ],
  exports:[SalesRequestComponent],
  entryComponents: [CancelRequestModalComponent,DevolutionRequestModalComponent]
})
export class SalesRequestModule { }
