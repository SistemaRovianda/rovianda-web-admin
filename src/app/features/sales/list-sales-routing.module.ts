import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../quality/layout/layout.component';
import { LayoutModule } from '../quality/layout/layout.module';
import { CommonModule } from '@angular/common';
import { GuardAuthGuard } from '../guards/guard-auth.guard';
import { ListSalesComponent } from './list-sales/list-sales.component';
import { ListSalesModule } from './list-sales/list-sales.module';
import { SalesRequestComponent } from './sales-request/sales-request.component';
import { SalesRequestModule } from './sales-request/sales-request.module';


const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children:[
      {
        path:"list",
        component: ListSalesComponent,
        canActivate:[GuardAuthGuard]
      },
      {
        path:"request",
        component: SalesRequestComponent,
        canActivate:[GuardAuthGuard]
      }
    ]
  },

];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LayoutModule,
    ListSalesModule,
    SalesRequestModule
  ],
  exports:[RouterModule]
})
export class ListSalesRoutingModuleModule { }
