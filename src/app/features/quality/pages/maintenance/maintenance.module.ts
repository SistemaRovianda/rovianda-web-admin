import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaintenancePageComponent } from "./maintenance.page";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { HistoryListModule } from "../../components/history-list/history-list.module";
import { DocumentListModule } from "../../components/document-list/document-list.module";
import { RecordsModule } from "../../components/records/records.module";
import { MaintenanceDetailModule } from "../../components/maintenance-detail/maintenance-detail.module";
import { MatIconModule } from "@angular/material";

const COMMON_IMPORTS = [
  CommonModule,
  FlexLayoutModule,
  MatCardModule,
  MatProgressSpinnerModule,
  DocumentListModule,
  RecordsModule,
  MaintenanceDetailModule,
  MatIconModule,
];

const COMMON_DECLARATIONS = [MaintenancePageComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class MaintenancePageModule {}
