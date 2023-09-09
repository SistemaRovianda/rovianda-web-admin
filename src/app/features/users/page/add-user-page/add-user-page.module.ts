import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AddUserPageComponent } from "./add-user-page.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSelectModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LayoutModule } from "src/app/features/quality/layout/layout.module";
import { LayoutComponent } from "src/app/features/quality/layout/layout.component";
import { ListAllSellersModule } from "../components/list-all-sellers/list-all-sellers.module";
import { ListAllSellersComponent } from "../components/list-all-sellers/list-all-sellers.component";

const routes: Routes = [
  {
    
    
    path: "",
    component: AddUserPageComponent
    
}
];

const COMMON_DECLARATIONS = [AddUserPageComponent];

const COMMON_IMPORTS = [
  CommonModule,
  RouterModule.forChild(routes),
  FlexLayoutModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatProgressSpinnerModule,
  FormsModule,
  LayoutModule,
  ReactiveFormsModule,
  MatSelectModule,
  ListAllSellersModule
];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_IMPORTS,
  entryComponents:[ListAllSellersComponent]
})
export class AddUserPageModule {}
