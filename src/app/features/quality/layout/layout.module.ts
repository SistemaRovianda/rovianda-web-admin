import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";

import { MatListModule } from "@angular/material/list";

const COMMON_MODULES = [
  CommonModule,
  MatToolbarModule,
  FlexLayoutModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  RouterModule,
  MatMenuModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule
];

const COMMON_DECLARATIONS = [LayoutComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_MODULES,
  exports: COMMON_DECLARATIONS
})
export class LayoutModule {}
