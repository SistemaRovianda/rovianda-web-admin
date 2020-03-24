import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout.component";
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginFormModule } from "../components/login-form/login-form.module";
import { MatButtonModule } from "@angular/material/button";

const COMMON_MODULES = [
  CommonModule,
  FlexLayoutModule,
  MatCardModule,
  LoginFormModule,
  MatButtonModule
];

const COMMON_DECLARATIONS = [LayoutComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_MODULES,
  exports: COMMON_DECLARATIONS
})
export class LayoutModule {}
