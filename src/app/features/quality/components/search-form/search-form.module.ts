import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { SearchFormComponent } from "./search-form.component";
import { MatSelectModule } from '@angular/material/select';
const COMMON_IMPORTS = [
  FormsModule,
  CommonModule,
  MatInputModule,
  MatButtonModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  MatIconModule,
  MatSelectModule
];
const COMMON_DECLARATIONS = [SearchFormComponent];

@NgModule({
  imports: [COMMON_IMPORTS],
  declarations: [COMMON_DECLARATIONS],
  exports: [COMMON_DECLARATIONS]
})
export class SearchFormModule {}
