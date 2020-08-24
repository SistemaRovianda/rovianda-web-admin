import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { MachineComponent } from './machine.component';
import { DateMachineComponent } from '../../components/date-machine/date-machine.component';

//angular material
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatInputModule, MAT_DATE_LOCALE } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

const COMMON_IMPORTS=[
  CommonModule,
  MatTableModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatButtonModule,
  ReactiveFormsModule
  
]
const COMMON_DECLARATIONS=[
  MachineComponent, 
  DateMachineComponent
]
const COMMON_EXPORTS=[]
const COMMON_ENTRY_COMPONENTS=[DateMachineComponent]
const COMMON_PROVIDERS=[
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
]

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_IMPORTS,
  exports: COMMON_EXPORTS,
  entryComponents:COMMON_ENTRY_COMPONENTS,
  providers: COMMON_PROVIDERS
})
export class MachineModule { }
