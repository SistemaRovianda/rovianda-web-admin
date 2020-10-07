import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterContactsComponent } from './register-contacts.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

const COMMON_EXPORTS=[RegisterContactsComponent]
const COMMON_IMPORTS=[
  CommonModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  FormsModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatTableModule
]

@NgModule({
  declarations: COMMON_EXPORTS,
  imports:COMMON_IMPORTS,
  exports: COMMON_EXPORTS 
})
export class RegisterContactsModule { }
