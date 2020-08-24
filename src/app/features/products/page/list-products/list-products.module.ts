import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { TableModule } from '../../components/table/table.module';
import { ProductsComponent } from './list-products.component';

//angular material
import { MatButtonModule } from '@angular/material/button';
import { DetailsProductModule } from '../../components/details-product/details-product.module';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    MatButtonModule,
    DetailsProductModule
  ],
  exports:[
    ProductsComponent
  ]
})
export class ProductsModule { }
