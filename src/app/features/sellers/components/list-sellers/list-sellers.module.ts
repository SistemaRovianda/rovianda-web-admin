import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSellersComponent } from './list-sellers.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { SellersVisitsDialogModule } from '../sellers-visits-dialog/sellers-visits-dialog.module';
import { SellersVisitsDialogComponent } from '../sellers-visits-dialog/sellers-visits-dialog.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SellerService } from 'src/app/features/services/seller.service';
@NgModule({
  declarations: [ListSellersComponent],
  imports: [
    CommonModule,MatTableModule,MatButtonModule,MatDialogModule,SellersVisitsDialogModule,MatProgressSpinnerModule
  ],
  exports:[ListSellersComponent],
  entryComponents:[SellersVisitsDialogComponent],
  providers:[SellerService]
})
export class ListSellersModule { }
