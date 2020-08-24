import { Component, OnInit, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ingredient } from 'src/app/features/models/model-products';
import { ServicesProductsService } from 'src/app/features/services/services-products.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent implements OnInit {

  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private serviceProduct:ServicesProductsService,
    public dialog: MatDialog,

  ) {
    this.form = new FormGroup({
      product: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[0-9a-zA-Z\u00C0-\u017F]+(?:\s[0-9a-zA-Z\u00C0-\u017F]+)*$/)
      ]),
      mark: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[0-9a-zA-Z\u00C0-\u017F]+(?:\s[0-9a-zA-Z\u00C0-\u017F]+)*$/)
      ]),
      variant: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[0-9a-zA-Z\u00C0-\u017F]+(?:\s[0-9a-zA-Z\u00C0-\u017F]+)*$/)
      ]),
      presentation: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[0-9a-zA-Z\u00C0-\u017F]+(?:\s[0-9a-zA-Z\u00C0-\u017F]+)*$/)
      ])
    })
  }

  getErrorProduct() {
    return this.form.get('product').hasError('required') && this.form.get('product').touched? 'El producto es requerido'
      : this.form.get('product').hasError('minlength')? 'Minimo 3 letras'
      : this.form.get('product').hasError('pattern')? 'No se permiten espacios en blanco'
      : '';
  }

  getErrorMark() {
    return this.form.get('mark').hasError('required') && this.form.get('mark').touched? 'La marca es requerida'
      : this.form.get('mark').hasError('minlength')? 'Minimo 3 letras'
      : this.form.get('mark').hasError('pattern')? 'No se permiten espacios en blanco'
      : '';
  }
  getErrorVariant() {
    return this.form.get('variant').hasError('required') && this.form.get('variant').touched? 'Variante es requerida'
      : this.form.get('variant').hasError('minlength')? 'Minimo 3 letras'
      : this.form.get('variant').hasError('pattern')? 'No se permiten espacios en blanco'
      : '';
  }
  getErrorPresentation() {
    return this.form.get('presentation').hasError('required') && this.form.get('presentation').touched? 'La presentación es requerida'
      : this.form.get('presentation').hasError('minlength')? 'Minimo 3 letras'
      : this.form.get('presentation').hasError('pattern')? 'No se permiten espacios en blanco'
      : '';
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close('nothing');
  }

  onClickUser(): void {
    let sendIngredient: ingredient = {
      nameProduct: this.form.get('product').value,
      mark: this.form.get('mark').value,
      variant: this.form.get('variant').value,
      presentation: this.form.get('presentation').value,
      category:"DRIEF"
    };

    this.serviceProduct.postAddIngredient(sendIngredient).subscribe(()=>{
      this.dialogRef.close('update');
      this.openDialogConfirm(
        {title:'Ingrediente agregado', msg:`Se ha agregado un ingrediente al listado.`}
      ); 
    },(err)=>{
      this.openDialogConfirm(
        {title:'Error',msg:`Ha ocurrido un error al intentar registrar el ingrediente.`}
      );
    })

  }

  openDialogConfirm(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data=data;
    this.dialog.open(DialogComponent, dialogConfig);
  }

}
