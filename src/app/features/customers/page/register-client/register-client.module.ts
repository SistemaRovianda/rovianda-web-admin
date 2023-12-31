import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

//components
import { DataBasicClientComponent } from "../../components/data-basic-client/data-basic-client.component";
import { RegisterClientComponent } from "./register-client.component";
import { AddressClientComponent } from "../../components/address-client/address-client.component";
import { TypeClientComponent } from "../../components/type-client/type-client.component";

//Angular material
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule, MatDialogRef, MatFormFieldModule, MatIconModule, MatProgressSpinnerModule } from "@angular/material";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatListModule } from "@angular/material/list";
import { MatRadioModule } from "@angular/material";
import { DialogComponent } from "src/app/features/products/components/dialog/dialog.component";
import { TableModule } from "src/app/features/products/components/table/table.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RegisterContactsComponent } from '../../components/register-contacts/register-contacts.component';
import { RegisterContactsModule } from '../../components/register-contacts/register-contacts.module';
import {MatSelectModule} from '@angular/material/select';
import { CreateClientModalModule } from "../../components/create-client-modal/create-client-modal.module";
@NgModule({
  declarations: [
    RegisterClientComponent,
    DataBasicClientComponent,
    AddressClientComponent,
    TypeClientComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatListModule,
    MatRadioModule,
    TableModule,
    FlexLayoutModule,
    RegisterContactsModule,
    MatSelectModule,
    CreateClientModalModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [RegisterClientComponent],
  entryComponents: [
    DataBasicClientComponent,
    AddressClientComponent,
    TypeClientComponent,
    DialogComponent,
    RegisterContactsComponent,
  ],
  providers: [
    // { provide: MatDialogRef, useValue: {hasBackdrop: false} },
  ],
})
export class RegisterClientModule {}
