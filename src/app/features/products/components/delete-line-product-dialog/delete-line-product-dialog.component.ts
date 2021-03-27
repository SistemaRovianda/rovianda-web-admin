import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServicesProductsService } from 'src/app/features/services/services-products.service';
import { ProductLineInterface } from 'src/app/features/shared/models/product.line.interface';

@Component({
  selector: 'app-delete-line-product-dialog',
  templateUrl: './delete-line-product-dialog.component.html',
  styleUrls: ['./delete-line-product-dialog.component.scss']
})
export class DeleteLineProductDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{productLine:ProductLineInterface},
  private matRef:MatDialogRef<DeleteLineProductDialogComponent>,
  private servicesProductsService:ServicesProductsService) { }

  ngOnInit() {
  }

  cancel(){
    this.matRef.close();
  }

}
