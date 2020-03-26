import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HistoryPageComponent } from "./history.page";
import { HistoryListModule } from "../../components/history-list/history-list.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { DocumentListModule } from "../../components/document-list/document-list.module";
import { SearchFormModule } from "../../components/search-form/search-form.module";

const COMMON_IMPORTS = [
  CommonModule,
  FlexLayoutModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  HistoryListModule,
  DocumentListModule,
  SearchFormModule
];

const COMMON_DECLARATIONS = [HistoryPageComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS
})
export class HistoryPageModule {}
