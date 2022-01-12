import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AdminProductsCatalog } from 'src/app/features/models/model-products';
import { WarehouseService } from 'src/app/features/services/warehouse.service';
import { PreregisterProductComponent } from '../preregister-product/preregister-product.component';

@Component({
  selector: 'app-list-products-edits',
  templateUrl: './list-products-edits.component.html',
  styleUrls: ['./list-products-edits.component.scss']
})
export class ListProductsEditsComponent implements OnInit {

  constructor(private roviandaApiService:WarehouseService,private dialog:MatDialog) { }

  columns:string[]=["product","presentation","price","weight","keySae","keyAltern","type","uniMed","edit"];
  dataSource:MatTableDataSource<AdminProductsCatalog>;
  form:FormGroup;
  isLoading:boolean=false;
  ngOnInit() {
    this.form = new FormGroup({
      productName: new FormControl(null,Validators.required)
    });
    this.dataSource = new MatTableDataSource();
    this.isLoading=true;
    this.search();
  }

  find(){
    if(this.form.valid){
      this.search(this.form.get("productName").value);
    }else{
      this.search();
    }
  }
  search(hint?:string){
    console.log("hint: "+hint);
    this.isLoading=true;
    this.roviandaApiService.getAllProductsRoviandaCatalog(hint).subscribe((rows)=>{
      this.dataSource.data=rows;
      this.isLoading=false;
    },(err)=>{
      this.isLoading=false;
    })
  }

edit(product:AdminProductsCatalog){
  this.dialog.open(PreregisterProductComponent,{
    data:{
      product,
      type:"edit"
    },
    disableClose: true,
    width:"600px"
  }).afterClosed().subscribe(()=>{
    this.find();
  })
}

}
