import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateClientModalComponent } from './create-client-modal.component';



@NgModule({
  declarations: [CreateClientModalComponent],
  imports: [
    CommonModule
  ],
  exports: [CreateClientModalComponent]
})
export class CreateClientModalModule { }
