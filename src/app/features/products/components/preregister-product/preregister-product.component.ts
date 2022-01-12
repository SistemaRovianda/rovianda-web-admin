import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { AdminPreRegisterProductDetails, AdminProductsCatalog, RequestPreRegistProduct } from 'src/app/features/models/model-products';
import { WarehouseService } from 'src/app/features/services/warehouse.service';
import { ModalConfirmDeleteComponent } from '../modal-confirm-delete/modal-confirm-delete.component';

@Component({
  selector: 'app-preregister-product',
  templateUrl: './preregister-product.component.html',
  styleUrls: ['./preregister-product.component.scss']
})
export class PreregisterProductComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{product:AdminProductsCatalog,type:string},
  private _snackBar: MatSnackBar
  ,private matDialogRef:MatDialogRef<PreregisterProductComponent> ,private roviandaApiService:WarehouseService,
  private dialog:MatDialog) { }
  form:FormGroup;
  form2:FormGroup;
  isLoading=false;
  details:AdminPreRegisterProductDetails;
  
  ngOnInit() {
    this.form = new FormGroup({
      code: new FormControl(null,Validators.required)
    });
    this.form2 = new FormGroup({
      productId: new FormControl(null),
      name:new FormControl(null,Validators.required),
      code: new FormControl(null,Validators.required),
      codeAltern: new FormControl(null,Validators.required),
      presentation: new FormControl(null,Validators.required),
      price: new FormControl(null,Validators.required),
      weight: new FormControl(null),
      type: new FormControl(null,Validators.required),
      quantityByPresentation: new FormControl(null),
      uniMed: new FormControl(null,Validators.required),
      esqDescription: new FormControl(null,Validators.required),
      esqKey: new FormControl(null,Validators.required)
    });
    if(this.data.type=='edit'){
    
      this.productId.setValue(this.data.product.id);
      this.name.setValue(this.data.product.product);
      this.name.disable();
      if(this.data.product.type=='ABARROTES'){
        this.form.get("code").setValue(this.data.product.keyAltern);
        this.code.setValue(this.data.product.keyAltern);
        this.codeAltern.setValue(this.data.product.keySae);
        this.quantityByPresentation.setValue(this.data.product.quantityByPresentation);
      }else{
        this.form.get("code").setValue(this.data.product.keySae);
        this.code.setValue(this.data.product.keySae);
        this.codeAltern.setValue(this.data.product.keySae);
      }
      this.code.disable();
      this.presentation.setValue(this.data.product.presentation);
      this.price.setValue(this.data.product.price);
      this.type.setValue(this.data.product.type);
      this.uniMed.setValue(this.data.product.uniMed)
      this.weight.setValue(this.data.product.weight);
      this.esqDescription.setValue(this.data.product.esqDescription);
      this.esqKey.setValue(this.data.product.esqKey);
      this.esqDescription.disable();
    }
  }

  validForm(){
    if(this.type.value!="ABARROTES"){
      if(this.form2.valid){
        return true;
      }else{
        return false;
      }
    }else{
      if(this.form2.get("quantityByPresentation").value!=null){
        return true;
      }else{
        return false;
      }
    }
    
  }
  get presentation(){
    return this.form2.get("presentation");
  }
  get productId(){
    return this.form2.get("productId");
  }
  get name(){
    return this.form2.get("name");
  }
  get code(){
    return this.form2.get("code");
  }
  get codeAltern(){
    return this.form2.get("codeAltern");
  }
  get price(){
    return this.form2.get("price");
  }

  get uniMed(){
    return this.form2.get("uniMed");
  }
  get type(){
    return this.form2.get("type");
  }

  get quantityByPresentation(){
    return this.form2.get("quantityByPresentation");
  }
  get weight(){
    return this.form2.get("weight");
  }
  get esqDescription(){
    return this.form2.get("esqDescription");
  }
  get esqKey(){
    return this.form2.get("esqKey");
  }
  search(){
    if(this.form.valid){
      this.isLoading =true;
      this.roviandaApiService.getPreRegisterProductDetails(this.form.get("code").value).subscribe((details)=>{
        this.details=details;
        if(details!=null){
          this.name.setValue(details.name);
          this.name.disable();
          if(details.productIdInSystem!=null){
            this.productId.setValue(details.productIdInSystem);
          }
          this.code.setValue(details.keySae);
          this.code.disable();
          this.codeAltern.setValue(details.keySae);
          this.price.setValue(details.price);
          this.uniMed.setValue(details.uniMed.toUpperCase());
          this.esqDescription.setValue(details.descriptionImp.toUpperCase()); 
          this.esqDescription.disable();
          this.esqKey.setValue(details.esqKey);
        }
        this.isLoading=false;
      },(err)=>{
        this.isLoading=false;
        this.details=null;
      })
    }
  }

  cancel(){
    this.matDialogRef.close();
  }

  validate(){
    if(this.form2.valid && !this.isLoading){
        if(this.type.value=="ABARROTES"){
          if(this.quantityByPresentation.value!=null){
            let request = this.buildRequest();
            this.regist(request);
          }
        }else{
          this.quantityByPresentation.setValue(null);
          if(this.form2.valid){
            let request = this.buildRequest();
            this.regist(request);
          }
        }
    }
  }

  buildRequest(){
    let request:RequestPreRegistProduct={
      code: this.code.value,
      codeAltern: this.codeAltern.value,
      name: this.name.value,
      presentation: this.form2.get("presentation").value,
      price: this.price.value,
      productId: this.productId.value,
      quantityByPresentation: this.quantityByPresentation.value,
      type: this.type.value,
      uniMed: this.uniMed.value,
      weight: this.weight.value,
      esqDescription: this.esqDescription.value,
      esqKey: this.esqKey.value
  };
  return request;
  }

  resincronize(){
    if(this.form.valid){
      this.isLoading =true;
      this.roviandaApiService.getPreRegisterProductDetails(this.form.get("code").value).subscribe((details)=>{
        this.details=details;
        if(details!=null){
          this.price.setValue(details.price);
          this.esqDescription.setValue(details.descriptionImp.toUpperCase()); 
          this.esqDescription.disable();
          this.esqKey.setValue(details.esqKey);
        }
        this.isLoading=false;
      },(err)=>{
        this.isLoading=false;
        this.details=null;
      })
    }
  }

  regist(request:RequestPreRegistProduct){
    this.isLoading=true;
    if(this.data.type=='create'){
      this.roviandaApiService.registPreRegist(request).subscribe(()=>{
        this._snackBar.open("Creación de producto exitosa","",{
          panelClass:"success",
          horizontalPosition:"center",
          verticalPosition:"bottom",
          duration: 3000
        });
        this.isLoading=false;
        this.cancel();
      },(err)=>{
        this._snackBar.open(err.error.message,"",{
          panelClass:"error",
          horizontalPosition:"center",
          verticalPosition:"bottom",
          duration: 3000
        });
        this.isLoading=false;
    })
    }else if(this.data.type=='edit'){
      this.roviandaApiService.updatePreRegist(this.productId.value,request).subscribe(()=>{
        this._snackBar.open("Edición exitosa","",{
          panelClass:"success",
          horizontalPosition:"center",
          verticalPosition:"bottom",
          duration:3000
        });
        this.isLoading=false;
        this.cancel();
      },(err)=>{
        this._snackBar.open(err.error.message,"",{
          panelClass:"error",
          horizontalPosition:"center",
          verticalPosition:"bottom",
          duration: 3000
        });
        this.isLoading=false;
    })
    }
  }

delete(){
  this.dialog.open(ModalConfirmDeleteComponent,{
    data: {
      productName: this.name.value+" "+this.presentation.value,
      id: this.productId.value
    }
  }).afterClosed().subscribe(()=>{
    this.cancel();
  });
  
}

}
