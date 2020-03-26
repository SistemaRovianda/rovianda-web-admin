import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { LayoutModule } from "./layout/layout.module";
import { HistoryPageComponent } from "./pages/history/history.page";
import { HistoryPageModule } from "./pages/history/history.module";
import { MaintenancePageComponent } from "./pages/maintenance/maintenance.page";
import { MaintenancePageModule } from "./pages/maintenance/maintenance.module";
const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "history",
        component: HistoryPageComponent
      },
      {
        path: "maintenance",
        component: MaintenancePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LayoutModule,
    HistoryPageModule,
    MaintenancePageModule
  ],
  exports: [RouterModule]
})
export class QualityRoutingModule {}
