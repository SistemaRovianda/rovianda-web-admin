import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//components
import { DataBasicClientComponent } from '../../components/data-basic-client/data-basic-client.component';
import { RegisterClientComponent } from './register-client.component';
import { AddressClientComponent } from '../../components/address-client/address-client.component';
import { TypeClientComponent } from '../../components/type-client/type-client.component';

//Angular material
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material';


@NgModule({
  declarations: [RegisterClientComponent, DataBasicClientComponent, AddressClientComponent, TypeClientComponent],
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
    MatRadioModule
  ],
  exports:[RegisterClientComponent],
  entryComponents:[DataBasicClientComponent, AddressClientComponent, TypeClientComponent],
  providers: []
})
export class RegisterClientModule { }
