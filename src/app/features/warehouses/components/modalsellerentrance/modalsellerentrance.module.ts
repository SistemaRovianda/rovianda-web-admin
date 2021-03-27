import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsellerentranceComponent } from './modalsellerentrance.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ModalTypeReportModule } from '../modal-type-report/modal-type-report.module';
import { ModalTypeReportComponent } from '../modal-type-report/modal-type-report.component';
import { ModalOutputsGeneralModule } from '../modal-outputs-general/modal-outputs-general.module';
import { ModalOutputsGeneralComponent } from '../modal-outputs-general/modal-outputs-general.component';
@NgModule({
  declarations: [ModalsellerentranceComponent],
  imports: [
    MatNativeDateModule,MatInputModule,MatProgressSpinnerModule,
    CommonModule,MatButtonModule,FlexLayoutModule,MatTableModule,MatDatepickerModule,ReactiveFormsModule,MatFormFieldModule,
    ModalTypeReportModule, ModalOutputsGeneralModule
  ],
  exports:[ModalsellerentranceComponent],
  entryComponents:[ModalTypeReportComponent,ModalOutputsGeneralComponent],
  providers:[{provide: MAT_DATE_LOCALE,  useValue: 'es-ES'}]
})
export class ModalsellerentranceModule { }
