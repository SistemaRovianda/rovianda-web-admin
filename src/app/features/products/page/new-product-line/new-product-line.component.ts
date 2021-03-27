import { Component, OnInit } from "@angular/core";
import { MatDialog, MatSnackBar, MatSnackBarModule, MatTableDataSource } from "@angular/material";
import { newLineProduct } from "src/app/features/models/model-products";
import { ServicesProductsService } from "src/app/features/services/services-products.service";
import { ProductLineInterface } from "src/app/features/shared/models/product.line.interface";
import { DeleteLineProductDialogComponent } from "../../components/delete-line-product-dialog/delete-line-product-dialog.component";

@Component({
  selector: "app-new-product-line",
  templateUrl: "./new-product-line.component.html",
  styleUrls: ["./new-product-line.component.scss"],
})
export class NewProductLineComponent implements OnInit {
  constructor(
    private productsService: ServicesProductsService,
    private snackbar: MatSnackBar,
    private matDialog:MatDialog
  ) {}

  productLines:ProductLineInterface[]=[];
  dataSource:MatTableDataSource<{key:string,name:string}>;
  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.productsService.getProductLines().subscribe((productLines)=>{
      this.productLines=productLines;
      this.dataSource.data = productLines.map(x=>({key:x.CVE_LIN,name:x.DESC_LIN}));
    })
  }
  displayedColumns =["key","name","options"];

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

  del(index:number){
    const dialog = this.matDialog.open(DeleteLineProductDialogComponent,{
      data:{
        productLine: this.productLines[index]
      },
      disableClose:true
    })
  }
}
