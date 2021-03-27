import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalTypeReportComponent } from './modal-type-report.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [ModalTypeReportComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[ModalTypeReportComponent]
})
export class ModalTypeReportModule { }
