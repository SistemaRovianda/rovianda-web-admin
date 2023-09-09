import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientsComponent } from './list-clients.component';
import { MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { SalesClientModalModule } from '../../components/sales-client-modal/sales-client-modal.module';
import { SalesClientModalComponent } from '../../components/sales-client-modal/sales-client-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { ChangeCodeModule } from '../../components/change-code/change-code.module';
import { ChangeCodeComponent } from '../../components/change-code/change-code.component';



@NgModule({
  declarations: [ListClientsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    SalesClientModalModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,ChangeCodeModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  exports:[ListClientsComponent],
  entryComponents:[SalesClientModalComponent,ChangeCodeComponent]
})
export class ListClientsModule { }
