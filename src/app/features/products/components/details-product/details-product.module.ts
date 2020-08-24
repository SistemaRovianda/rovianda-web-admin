import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsProductComponent } from './details-product.component';

//angular material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DetailsProductComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports:[
    DetailsProductComponent
  ]
})
export class DetailsProductModule { }
