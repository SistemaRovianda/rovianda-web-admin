import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LayoutComponent } from '../quality/layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../quality/layout/layout.module';
import { SellersPageModule } from './components/sellers-page/sellers-page.module';
import { SellersPageComponent } from './components/sellers-page/sellers-page.component';


const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children:[
      {
        path:"list",
        component: SellersPageComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,SellersPageModule,
    RouterModule.forChild(routes),
    LayoutModule
  ],
  exports:[RouterModule]
})
export class SellerRoutingModuleModule { }
