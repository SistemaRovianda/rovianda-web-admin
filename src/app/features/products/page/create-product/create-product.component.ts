import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product, listIngredients } from 'src/app/features/models/model-products';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { AddPresentationComponent } from '../../components/add-presentation/add-presentation.component';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { AddIngredientComponent } from '../../components/add-ingredient/add-ingredient.component';
import { ServicesProductsService } from 'src/app/features/services/services-products.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  dataImg: any;
  saveBaseImg: any;
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogComponent>,
    public dialogRefIngredients: MatDialogRef<DialogComponent>,
    private serviceProduct: ServicesProductsService,
    public route: Router
  ) { 

  }

  options: any = [];
  change: any;
  objDataGeneric: product;
  objDataIngredients: Object = {};
  objDataPresentations: Object = {};
  ban: boolean = true
  ngOnInit() {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(AddPresentationComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(res => { (res != true) ? this.options = [res, ...this.options] : '' })
  }

  openDialogConfirm(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data=data;
    this.dialog.open(DialogComponent, dialogConfig);
  }

  print() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRefIngredients = this.dialog.open(AddIngredientComponent, dialogConfig);
    this.dialogRefIngredients.afterClosed().subscribe(res => {
      if (res == 'update') { this.change = [res, this.change] }
    })
  }

  objIngredients(event: any) {
    let element: listIngredients
    let contentarr: any[] = [];
    for (element of event) {
      contentarr.push({ 'productId': element.id, 'nameProduct': element.nameProduct })
    }
    this.objDataIngredients = contentarr;
    console.log(this.objDataIngredients)
    this.Valid()
  }

  objPresentation(event) {
    this.objDataPresentations = event;
    this.Valid()
  }

  dataGeneric(event: product) {
    this.objDataGeneric = event;
    this.Valid()
  }

  cancel() {
    this.options = [];
    this.change = [];
    this.objDataGeneric= undefined;
    this.objDataIngredients = {};
    this.objDataPresentations = {};
    this.ban = true
    this.resetImg()
    this.route.navigate(['products', 'list-products']);
  }

  Valid() {
    (this.objDataGeneric != undefined) ?
      (Object.keys(this.objDataGeneric).length &&
        Object.keys(this.objDataIngredients).length &&
        Object.keys(this.objDataPresentations).length &&
        this.saveBaseImg != null) ? this.ban = false : this.ban = true : this.ban = true;
  }

  sendData() {
    if (this.objDataGeneric != undefined)
      if (Object.keys(this.objDataGeneric).length &&
        Object.keys(this.objDataIngredients).length &&
        Object.keys(this.objDataPresentations).length &&
        this.saveBaseImg != null) {
        let send = {
          code: this.objDataGeneric.clave,
          nameProduct: this.objDataGeneric.name,
          ingredients: this.objDataIngredients,
          presentations: this.objDataPresentations,
          image:this.saveBaseImg
        }
        // console.log(JSON.stringify(send));
        this.serviceProduct.postAddProduct(send).subscribe(() => {
          this.route.navigate(['products', 'list-products']);
          this.openDialogConfirm(
            {title:'Producto Agregado', msg:`Se agrego el producto.`}
          ); 
        },(err)=>{
          this.openDialogConfirm(
            {title:'Error',msg:`Ha ocurrido un error al intentar registrar el producto`}
          );
        })
        this.ban = true;
      } else
        this.ban = true;
  }

  onFileChanges(event) {
    if (event.length != 0)
     if(event[0].type == "image/jpeg" || event[0].type == "image/png") {
      this.dataImg = event[0].base64;
      this.saveBaseImg = this.dataImg.replace(/^data:image\/[a-z]+;base64,/, "");
      this.Valid()
    } else {
      this.Valid()

    }
  }

  resetImg() {
    this.dataImg = null;
    this.saveBaseImg = null;
    this.Valid()
    }
}
