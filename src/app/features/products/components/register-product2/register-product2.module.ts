import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//components
import { RegisterProduct2Component } from './register-product2.component';

//angular material
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [RegisterProduct2Component],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  exports:[
    RegisterProduct2Component
  ]
})
export class RegisterProduct2Module { }
