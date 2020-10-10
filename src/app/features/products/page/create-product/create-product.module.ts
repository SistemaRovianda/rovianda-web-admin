import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AlifeFileToBase64Module } from "alife-file-to-base64";

//modules
import { RegisterProduct1Module } from "../../components/register-product1/register-product1.module";
import { RegisterProduct2Module } from "../../components/register-product2/register-product2.module";
import { RegisterProduct3Module } from "../../components/register-product3/register-product3.module";

//imports components
import { AddPresentationComponent } from "../../components/add-presentation/add-presentation.component";
import { CreateProductComponent } from "./create-product.component";

//angular material
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogRef,
  MatDialogModule,
  MatDialog,
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatSelectModule,
} from "@angular/material";
import { AddIngredientComponent } from "../../components/add-ingredient/add-ingredient.component";
import { MatIconModule } from "@angular/material/icon";

//flex-layout
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    CreateProductComponent,
    AddPresentationComponent,
    AddIngredientComponent,
  ],
  imports: [
    CommonModule,
    RegisterProduct1Module,
    RegisterProduct2Module,
    RegisterProduct3Module,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    FlexLayoutModule,
    AlifeFileToBase64Module,
    MatSelectModule,
  ],
  entryComponents: [AddPresentationComponent, AddIngredientComponent],
  providers: [
    CurrencyPipe,
    { provide: MatDialogRef, useValue: { hasBackdrop: false } },
    { provide: MAT_DIALOG_DATA, useValue: { hasBackdrop: false } },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CreateProductModule {}
