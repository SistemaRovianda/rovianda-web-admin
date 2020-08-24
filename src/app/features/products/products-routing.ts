import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../quality/layout/layout.component';
import { LayoutModule } from '../quality/layout/layout.module';
import { ProductsComponent } from './page/list-products/list-products.component';
import { ProductsModule } from './page/list-products/list-products.module';
import { CreateProductComponent } from './page/create-product/create-product.component';
import { CreateProductModule } from './page/create-product/create-product.module';
import { EditProductComponent } from './page/edit-product/edit-product.component';
import { EditProductModule } from './page/edit-product/edit-product.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "list-products",
        component: ProductsComponent
      },
      {
        path: "create-product",
        component: CreateProductComponent
      },
      {
        path: "edit-product",
        component: EditProductComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ProductsModule,
    LayoutModule,
    CreateProductModule,
    EditProductModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class ProductsRouting { }
