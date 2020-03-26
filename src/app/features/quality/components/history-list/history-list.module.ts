import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HistoryListComponent } from "./history-list.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";

const COMMON_IMPORTS = [CommonModule, FlexLayoutModule, MatCardModule];

const COMMON_DECLARATIONS = [HistoryListComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS
})
export class HistoryListModule {}
