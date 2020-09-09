import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../quality/layout/layout.component';
import { CreateFridgeComponent } from './page/create-fridge/create-fridge.component';
import { CreateFridgeModule } from './page/create-fridge/create-fridge.module';
import { LayoutModule } from '../quality/layout/layout.module';
const routes:Routes=[
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path:'fridge',
        component: CreateFridgeComponent
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CreateFridgeModule,
    LayoutModule,
    RouterModule.forChild(routes),
  ]
})
export class FridgeRoutingModule { }
