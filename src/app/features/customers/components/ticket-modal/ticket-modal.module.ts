import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketModalComponent } from './ticket-modal.component';
import { MatButtonModule, MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [TicketModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports:[TicketModalComponent]
})
export class TicketModalModule { }
