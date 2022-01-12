import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//components
import { TableModule } from "../../components/table/table.module";
import { ProductsComponent } from "./list-products.component";

//angular material
import { MatButtonModule } from "@angular/material/button";
import { DetailsProductModule } from "../../components/details-product/details-product.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ListProductsEditsModule } from "../../components/list-products-edits/list-products-edits.module";
import { PreregisterProductModule } from "../../components/preregister-product/preregister-product.module";
import { MatDialogModule } from "@angular/material";
import { PreregisterProductComponent } from "../../components/preregister-product/preregister-product.component";

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    TableModule,
    MatButtonModule,
    DetailsProductModule,
    FlexLayoutModule,
    ListProductsEditsModule,
    PreregisterProductModule,
    MatDialogModule
  ],
  exports: [ProductsComponent],
  entryComponents:[PreregisterProductComponent]
})
export class ProductsModule {}
