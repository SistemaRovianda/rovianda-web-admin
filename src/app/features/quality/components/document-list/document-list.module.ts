import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DocumentListComponent } from "./document-list.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";

const COMMON_IMPORTS = [CommonModule, FlexLayoutModule, MatButtonModule];

const COMMON_DECLARATIONS = [DocumentListComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS
})
export class DocumentListModule {}
