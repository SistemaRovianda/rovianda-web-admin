import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalTicketComponent } from './modal-ticket.component';
import { MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [ModalTicketComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[ModalTicketComponent]
})
export class ModalTicketModule { }
