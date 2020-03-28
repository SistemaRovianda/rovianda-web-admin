import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecordsComponent } from "./records.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";

const COMMON_IMPORTS = [CommonModule, FlexLayoutModule, MatIconModule];

const COMMON_DECLARATIONS = [RecordsComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS
})
export class RecordsModule {}
