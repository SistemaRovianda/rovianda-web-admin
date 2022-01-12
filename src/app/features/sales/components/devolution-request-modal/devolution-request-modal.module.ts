import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevolutionRequestModalComponent } from './devolution-request-modal.component';
import { MatButtonModule, MatProgressSpinnerModule } from '@angular/material';



@NgModule({
  declarations: [DevolutionRequestModalComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [DevolutionRequestModalComponent]
})
export class DevolutionRequestModalModule { }
