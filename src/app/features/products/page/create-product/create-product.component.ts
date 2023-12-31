import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
import {
  listIngredients,
  product,
  productLine,
} from "src/app/features/models/model-products";
import { ServicesProductsService } from "src/app/features/services/services-products.service";
import { AddIngredientComponent } from "../../components/add-ingredient/add-ingredient.component";
import { AddPresentationComponent } from "../../components/add-presentation/add-presentation.component";
import { DialogComponent } from "../../components/dialog/dialog.component";
import { RegisterProduct2Component } from '../../components/register-product2/register-product2.component';

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.scss"],
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
  ) {}

  @ViewChild(RegisterProduct2Component,{static:false}) ingreComponent: RegisterProduct2Component;

  options: any = [];
  change: any;
  objDataGeneric: product;
  objDataIngredients: Object = {};
  objDataPresentations: Object = {};
  ban: boolean = true;

  productLine: any;

  ngOnInit() {
    this.serviceProduct.getProductsLine().subscribe((line) => {
      this.productLine = line;
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(AddPresentationComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe((res) => {
      res != true ? (this.options = [res, ...this.options]) : "";
      
      
    });
  }

  openDialogConfirm(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    this.dialog.open(DialogComponent, dialogConfig);
  }

  print() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRefIngredients = this.dialog.open(
      AddIngredientComponent,
      dialogConfig
    );
    this.dialogRefIngredients.afterClosed().subscribe((res) => {
      // if (res == "update") {
      //   if(this.change!=undefined){
      //   this.change = [res, this.change];
      //   }else{
      //     this.change=[res];
      //   }
      // }
      this.ingreComponent.reloadFromService();
    });
  }

  objIngredients(event: any) {
    let element: listIngredients;
    let contentarr: any[] = [];
    for (element of event) {
      contentarr.push({
        productId: element.id,
        nameProduct: element.nameProduct,
      });
    }
    this.objDataIngredients = contentarr;
    this.Valid();
  }

  objPresentation(event) {
    this.objDataPresentations = event;
    this.Valid();
  }

  dataGeneric(event: product) {
    this.objDataGeneric = event;
    this.Valid();
  }

  cancel() {
    this.options = [];
    this.change = [];
    this.objDataGeneric = undefined;
    this.objDataIngredients = {};
    this.objDataPresentations = {};
    this.ban = true;
    this.resetImg();
    this.route.navigate(["products", "list-products"]);
  }

  Valid() {
    if(this.objDataGeneric!=null){
      if(Object.keys(this.objDataGeneric).length &&
        Object.keys(this.objDataPresentations).length &&
        this.saveBaseImg != null){
        this.ban = false;
        }else{
          this.ban = true;
        }
      }else{
        this.ban=true;
      }
    return this.ban;
  }

  sendData() {
    if (this.objDataGeneric != undefined)
      if (
        Object.keys(this.objDataGeneric).length &&
        Object.keys(this.objDataPresentations).length &&
        this.saveBaseImg != null
      ) {
        console.log(JSON.stringify(this.objDataGeneric));
        let send = {
          distLine: this.objDataGeneric.distLine,
          keyProduct: this.objDataGeneric.clave,
          nameProduct: this.objDataGeneric.name,
          ingredients: this.objDataIngredients,
          presentations: this.objDataPresentations,
          productRoviandaImage: this.saveBaseImg,
          productLine: this.objDataGeneric.productLine,
        };

        this.serviceProduct.postAddProduct(send).subscribe(
          () => {
            this.route.navigate(["products", "list-products"]);
            this.openDialogConfirm({
              title: "Producto Agregado",
              msg: `Se agrego el producto.`,
            });
          },
          (err) => {
            this.openDialogConfirm({
              title: "Error",
              msg: `Ha ocurrido un error al intentar registrar el producto`,
            });
          }
        );
        this.ban = true;
      } else this.ban = true;
  }

  onFileChanges(event) {
    if (event.length != 0)
      if (event[0].type == "image/jpeg" || event[0].type == "image/png") {
        this.dataImg = event[0].base64;
        this.saveBaseImg = this.dataImg.replace(
          /^data:image\/[a-z]+;base64,/,
          ""
        );
      } 
      this.Valid();
  }

  resetImg() {
    this.dataImg = null;
    this.saveBaseImg = null;
    this.Valid();
  }
  
}
