import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HistoryListModule } from "../../components/history-list/history-list.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { DocumentListModule } from "../../components/document-list/document-list.module";
import { SearchFormModule } from "../../components/search-form/search-form.module";

import { SearchDriefComponent } from "../../components/search-drief/search-drief.component";
import { SearchPackagingComponent } from "../../components/search-packaging/search-packaging.component";
import { MessagesComponent } from "../../components/messages/messages.component";
import { DateReportsComponent } from "../../components/date-reports/date-reports.component";
import { HistoryPageComponent } from "./history.page";

//angular material
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import {
  MatNativeDateModule,
  MatInputModule,
  MAT_DATE_LOCALE,
  MatIconModule,
} from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";

const COMMON_IMPORTS = [
  CommonModule,
  FlexLayoutModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  HistoryListModule,
  DocumentListModule,
  SearchFormModule,
  MatTableModule,
  MatDatepickerModule,
  ReactiveFormsModule,
  MatNativeDateModule,
  MatInputModule,
  MatIconModule,
];

const COMMON_DECLARATIONS = [
  HistoryPageComponent,
  DateReportsComponent,
  SearchDriefComponent,
  SearchPackagingComponent,
  MessagesComponent,
];

const COMMON_ENTRY_COMPONENTS = [
  SearchDriefComponent,
  SearchPackagingComponent,
  MessagesComponent,
  DateReportsComponent,
];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
  entryComponents: COMMON_ENTRY_COMPONENTS,
})
export class HistoryPageModule {}
