import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RegisterProduct1Module } from '../../components/register-product1/register-product1.module';
import { RegisterProduct2Module } from '../../components/register-product2/register-product2.module';
import { RegisterProduct3Module } from '../../components/register-product3/register-product3.module';
import { ReactiveFormsModule } from '@angular/forms';
//imports components
import { AddPresentationComponent } from '../../components/add-presentation/add-presentation.component';

//angular material
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogRef, MatDialogModule, MatDialog, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { AddIngredientComponent } from '../../components/add-ingredient/add-ingredient.component';

import { EditProductComponent } from './edit-product.component';



@NgModule({
  declarations: [EditProductComponent],
  imports: [
    CommonModule,
    RegisterProduct1Module,
    RegisterProduct2Module,
    RegisterProduct3Module,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    AddPresentationComponent,
    AddIngredientComponent
  ],
  providers:[
    CurrencyPipe,
    { provide: MatDialogRef, useValue: {hasBackdrop: false} },
    { provide: MAT_DIALOG_DATA,useValue: {hasBackdrop: false } },
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class EditProductModule { }
