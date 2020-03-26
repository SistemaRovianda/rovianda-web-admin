import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./features/landing/landing.module").then(m => m.LandingModule)
  },
  {
    path: "quality",
    loadChildren: () =>
      import("./features/quality/quality.module").then(m => m.QualityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
