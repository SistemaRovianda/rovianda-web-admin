import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterProduct3Component } from './register-product3.component';

//angular material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [RegisterProduct3Component],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ],
  exports:[
    RegisterProduct3Component
  ]
})
export class RegisterProduct3Module { }
