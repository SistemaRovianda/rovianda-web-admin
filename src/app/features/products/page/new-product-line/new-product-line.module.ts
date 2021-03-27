import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewProductLineComponent } from "./new-product-line.component";
import { NewProductLineFormModule } from "../../components/new-product-line-form/new-product-line-form.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatCardModule, MatTableModule } from "@angular/material";
import { DeleteLineProductDialogModule } from "../../components/delete-line-product-dialog/delete-line-product-dialog.module";
import { DeleteLineProductDialogComponent } from "../../components/delete-line-product-dialog/delete-line-product-dialog.component";
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [NewProductLineComponent],
  imports: [
    CommonModule,
    NewProductLineFormModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatButtonModule,
    DeleteLineProductDialogModule,
    MatDialogModule
  ],
  exports: [NewProductLineComponent],
  entryComponents:[DeleteLineProductDialogComponent]
})
export class NewProductLineModule {}
