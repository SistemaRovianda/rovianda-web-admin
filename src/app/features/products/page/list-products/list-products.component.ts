import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesProductsService } from 'src/app/features/services/services-products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PreregisterProductComponent } from '../../components/preregister-product/preregister-product.component';
import { ListProductsEditsComponent } from '../../components/list-products-edits/list-products-edits.component';

@Component({
  selector: 'app-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  dataDetailsProduct:any;

  @ViewChild("listProducts",{static:true}) listProduct:ListProductsEditsComponent;

  constructor(
    private serviceProduct:ServicesProductsService,
    private router: Router,
    private dialog:MatDialog
      ) { }


  ngOnInit() {
  }

  detailsProduct(id:number){
    this.serviceProduct.getDetailsProduct(id).subscribe((data)=>{
      this.dataDetailsProduct=data;
    })
  }

  navigateCreateProduct(){
    this.router.navigate(['products','create-product']);
  }

  openPreRegister(){
      this.dialog.open(PreregisterProductComponent,{
        data:{
          type:'create'
        },
        disableClose:true,
        width: "600px"
      }).afterClosed().subscribe(()=>{
          
            this.listProduct.find();
          
      })
  }


}
