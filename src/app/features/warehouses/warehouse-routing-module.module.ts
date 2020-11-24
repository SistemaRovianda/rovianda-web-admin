import { NgModule } from '@angular/core';
import { CreateWarehouseComponent } from './create-warehouse-page/create-warehouse.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../quality/layout/layout.component';
import { LayoutModule } from '../quality/layout/layout.module';
import { CommonModule } from '@angular/common';
import { GuardAuthGuard } from '../guards/guard-auth.guard';
import { CreateWarehouseModule } from './create-warehouse-page/create-warehouse.module';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children:[
      {
        path:"create",
        component: CreateWarehouseComponent,
        canActivate:[GuardAuthGuard]
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    CreateWarehouseModule
  ],
  exports:[RouterModule]
})
export class WarehouseRoutingModuleModule { }
