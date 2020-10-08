import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LayoutComponent } from "../quality/layout/layout.component";
import { LayoutModule } from "../quality/layout/layout.module";
import { ProductsComponent } from "./page/list-products/list-products.component";
import { ProductsModule } from "./page/list-products/list-products.module";
import { CreateProductComponent } from "./page/create-product/create-product.component";
import { CreateProductModule } from "./page/create-product/create-product.module";
import { EditProductComponent } from "./page/edit-product/edit-product.component";
import { EditProductModule } from "./page/edit-product/edit-product.module";
import { CommonModule } from "@angular/common";
import { GuardAuthGuard } from "../guards/guard-auth.guard";
import { NewProductLineModule } from "./page/new-product-line/new-product-line.module";
import { NewProductLineComponent } from "./page/new-product-line/new-product-line.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "list-products",
        component: ProductsComponent,
        canActivate: [GuardAuthGuard],
      },
      {
        path: "create-product",
        component: CreateProductComponent,
        canActivate: [GuardAuthGuard],
      },
      {
        path: "edit-product",
        component: EditProductComponent,
        canActivate: [GuardAuthGuard],
      },

      {
        path: "line",
        component: NewProductLineComponent,
        canActivate: [GuardAuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ProductsModule,
    LayoutModule,
    CreateProductModule,
    EditProductModule,
    CommonModule,
    NewProductLineModule,
  ],
  exports: [RouterModule],
})
export class ProductsRouting {}
