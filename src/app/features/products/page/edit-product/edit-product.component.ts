import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { product, listIngredients } from 'src/app/features/models/model-products';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { AddPresentationComponent } from '../../components/add-presentation/add-presentation.component';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { AddIngredientComponent } from '../../components/add-ingredient/add-ingredient.component';
import { ServicesProductsService } from 'src/app/features/services/services-products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  id: number;
  options: any = [];
  change: any;
  objDataGeneric: product;
  objDataIngredients: Object = {};
  objDataPresentations: Object = {};
  ban: boolean = false
  objDetails: any;
  dataImg: any;
  saveBaseImg: any;
  urlImage:string;
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogComponent>,
    public dialogRefIngredients: MatDialogRef<DialogComponent>,
    private serviceProduct: ServicesProductsService,
    public route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    await this.activatedRoute.params.subscribe(params => {
      this.id = params.id
    });
    await this.serviceProduct.getDetailsProduct(this.id).subscribe((data: any) => {
      let ingredients = data.ingredents
      let change: any[] = [];
      let obj: any;
      for (let element of ingredients) {
        obj = {
          id: element.ingredientId,
          nameProduct: element.description,
          mark: element.mark,
          variant: element.variant,
          presentation: element.presentation,
        }
        change.push(obj)
      }
      this.change = change;
      this.options = data.presentations;
      this.objDetails = { code: data.code, nameProduct: data.nameProduct };
      this.objDataGeneric = this.objDetails;
      this.objDataIngredients = data.ingredents;
      this.objDataPresentations = this.options;
      this.dataImg= data.image
    })
  }

  openDialog() {
    // this function open the dialog for add presentations
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(AddPresentationComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(res => { (res != true) ? this.options = [res, ...this.options] : '' })
  }

  openDialogConfirm(data) {
    //this function open dialog for messages samples with user 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    this.dialog.open(DialogComponent, dialogConfig);
  }

  print() {
    //this method open of dialog por add ingredient and get data of ingredients selects in the list
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRefIngredients = this.dialog.open(AddIngredientComponent, dialogConfig);
    this.dialogRefIngredients.afterClosed().subscribe(res => {
      if (res == 'update') { this.change = [res, this.change] }
    })
  }

  objIngredients(event: any) {
    //this method get the data finally and convert to object waiting for service
    let element: listIngredients
    let contentarr: any[] = [];
    for (element of event) {
      console.log('edit: ',event)
      console.log('edit element: ',element)
      contentarr.push({ 'ingredientId': element.id, 'description': element.nameProduct, 
      'variant':element.variant, 'presentation':element.presentation, 'mark': element.mark })
    }
    this.objDataIngredients = contentarr;
    console.log('result: ',this.objDataIngredients)
    this.Valid()
  }

  objPresentation(event) {
    this.objDataPresentations = event;
    this.Valid()
  }

  dataGeneric(event: product) {  //funciona
    this.objDataGeneric = event;
    this.Valid()
  }

  cancel() {
    this.options = [];
    this.change = [];
    this.objDataGeneric = undefined;
    this.objDataIngredients = {};
    this.objDataPresentations = {};
    this.ban = true;
    this.resetImg()
    this.route.navigate(['products', 'list-products']);
  }

  Valid() {

    (this.objDataGeneric != undefined) ?
      (Object.keys(this.objDataGeneric).length &&
        Object.keys(this.objDataIngredients).length &&
        Object.keys(this.objDataPresentations).length) ? this.ban = false : this.ban = true : this.ban = true;
  }

  sendData() {
    if (this.objDataGeneric != undefined)
      if (Object.keys(this.objDataGeneric).length &&
        Object.keys(this.objDataIngredients).length &&
        Object.keys(this.objDataPresentations).length && this.dataImg != null) {
        let send = {
          code: this.objDataGeneric.clave,
          nameProduct: this.objDataGeneric.name,
          ingredients: this.objDataIngredients,
          presentation: this.objDataPresentations,
          status: true,
          image: this.saveBaseImg || ''
        }
        // console.log(send)
        this.serviceProduct.putProductRovianda(this.id, send).subscribe(() => {
          this.route.navigate(['products', 'list-products']);
          this.openDialogConfirm(
            { title: 'Producto Actualizado', msg: `Se ha actualizado el producto.` }
          );
        }, (err) => {
          this.openDialogConfirm(
            { title: 'Error', msg: `Ha ocurrido un error al intentar actualizar el producto.` }
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
    this.urlImage=null
    this.Valid()
    }

}
