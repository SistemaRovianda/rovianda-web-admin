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
  },
  {
    path: "products",
    loadChildren: ()=> import("./features/products/products-module").then(m=>m.ProductsModule)
  },
  {
    path:"customers",
    loadChildren: ()=> import("./features/customers/customers.module").then(m=>m.CustomersModule)
  },
  {
    path:"machines",
    loadChildren: ()=>import("./features/machine/machine.module").then(m=>m.MachineModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
