import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { AuthService } from './features/services/auth.service';
import { GuardAuthGuard } from './features/guards/guard-auth.guard';
import { GuardLoginGuard } from './features/guards/guard-login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: "login",
    loadChildren: () =>
      import("./features/landing/landing.module").then(m => m.LandingModule),
      canActivate:[GuardLoginGuard]
  },
  {
    path: "quality",
    loadChildren: () => import("./features/quality/quality.module").then(m => m.QualityModule),
      canActivate:[GuardAuthGuard]
  },
  {
    path:"warehouses",
    loadChildren: ()=> import("./features/warehouses/warehouse-module.module").then(m=>m.WarehouseModuleModule),
    canActivate:[GuardAuthGuard]
  },
  {
    path:"sellers",
    loadChildren: ()=> import("./features/sellers/seller-module.module").then(m=>m.SellerModuleModule),
    canActivate:[GuardAuthGuard]
  }
  ,{
    path: "products",
    loadChildren: ()=> import("./features/products/products-module").then(m=>m.ProductsModule),
    canActivate:[GuardAuthGuard]
  },{
    path:"customers",
    loadChildren: ()=> import("./features/customers/customers.module").then(m=>m.CustomersModule),
    canActivate:[GuardAuthGuard]
  },{
    path:"machines",
    loadChildren: ()=>import("./features/machine/machine.module").then(m=>m.MachineModule),
    canActivate:[GuardAuthGuard]
  },{
    path: 'fridge',
    loadChildren: ()=> import("./features/fridges/fridge.module").then(m=>m.FridgeModule),
    canActivate:[GuardAuthGuard]
  },
  {
    path: 'users',
    loadChildren: ()=>import("./features/users/page/list-users/list-users.module").then(m=>m.ListUsersModule),
    canActivate:[GuardAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
