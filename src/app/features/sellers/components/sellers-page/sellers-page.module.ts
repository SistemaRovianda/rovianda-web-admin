import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersPageComponent } from './sellers-page.component';
import { ListSellersModule } from '../list-sellers/list-sellers.module';




@NgModule({
  declarations: [SellersPageComponent],
  imports: [
    CommonModule,ListSellersModule
  ]
})
export class SellersPageModule { }
