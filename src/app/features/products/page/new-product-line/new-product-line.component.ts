import { Component, OnInit } from "@angular/core";
import { MatSnackBar, MatSnackBarModule } from "@angular/material";
import { newLineProduct } from "src/app/features/models/model-products";
import { ServicesProductsService } from "src/app/features/services/services-products.service";

@Component({
  selector: "app-new-product-line",
  templateUrl: "./new-product-line.component.html",
  styleUrls: ["./new-product-line.component.scss"],
})
export class NewProductLineComponent implements OnInit {
  constructor(
    private productsService: ServicesProductsService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {}

  onSubmit(payload: newLineProduct) {
    console.log(payload);
    this.productsService.addProductsLine(payload).subscribe(
      (success) => {
        this.snackbar.open("Creado con exito", "OK", {
          panelClass: "success",
        });
      },
      (err) => {
        this.snackbar.open("Ha surgido un error, intenta de nuevo", "OK");
      }
    );
  }
}
