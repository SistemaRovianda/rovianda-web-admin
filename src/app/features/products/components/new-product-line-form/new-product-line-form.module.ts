import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewProductLineFormComponent } from "./new-product-line-form.component";
import { MatCardModule, MatInputModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

const COMMON_IMPORTS = [
  CommonModule,
  MatCardModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  FlexLayoutModule,
];
const COMMON_DECLARATIONS = [NewProductLineFormComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class NewProductLineFormModule {}
