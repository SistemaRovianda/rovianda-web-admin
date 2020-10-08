import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewProductLineComponent } from "./new-product-line.component";
import { NewProductLineFormModule } from "../../components/new-product-line-form/new-product-line-form.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatCardModule } from "@angular/material";

@NgModule({
  declarations: [NewProductLineComponent],
  imports: [
    CommonModule,
    NewProductLineFormModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [NewProductLineComponent],
})
export class NewProductLineModule {}
