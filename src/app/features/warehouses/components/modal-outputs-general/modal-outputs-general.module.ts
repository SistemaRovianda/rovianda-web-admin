import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalOutputsGeneralComponent } from './modal-outputs-general.component';
import { MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatProgressSpinnerModule, MatTableModule, MAT_DATE_LOCALE } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalOutputsGeneralComponent],
  imports: [
    MatNativeDateModule,MatInputModule,MatProgressSpinnerModule
    ,MatButtonModule,FlexLayoutModule,MatTableModule,MatDatepickerModule,ReactiveFormsModule,MatFormFieldModule,
    CommonModule
  ],
  exports:[ModalOutputsGeneralComponent],
  providers:[{provide: MAT_DATE_LOCALE,  useValue: 'es-ES'}]
})
export class ModalOutputsGeneralModule { }
