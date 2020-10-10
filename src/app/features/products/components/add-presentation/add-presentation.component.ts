import { Component, OnInit, Inject, Output } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DialogComponent } from "../dialog/dialog.component";
import { CurrencyPipe } from "@angular/common";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Tax } from "src/app/features/models/model-products";
import { ServicesProductsService } from "src/app/features/services/services-products.service";

@Component({
  selector: "app-add-presentation",
  templateUrl: "./add-presentation.component.html",
  styleUrls: ["./add-presentation.component.scss"],
})
export class AddPresentationComponent implements OnInit {
  formattedAmount: string;
  form: FormGroup;

  taxSchema: Tax[] = [];
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private serviceProduct: ServicesProductsService,

    private currencyPipe: CurrencyPipe
  ) {
    this.form = new FormGroup({
      cuantity: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[0-9]\d*$/),
      ]),
      typePresentation: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[A-ZÑÁÉÍÓÚa-zñáéíóú]+(([A-ZÑÁÉÍÓÚa-zñáéíóú])+)*$/),
      ]),
      costPresentation: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[\$0-9]+([.][0-9]+)?$/),
      ]),
      taxSchema: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[\$0-9]+([.][0-9]+)?$/),
      ]),
    });
  }

  getErrorCuantity() {
    return this.form.get("cuantity").hasError("required") &&
      this.form.get("cuantity").touched
      ? "El campo es requerido."
      : this.form.get("cuantity").hasError("pattern")
      ? "Ingresa solo números."
      : "";
  }

  getErrorCostPresentation() {
    return this.form.get("costPresentation").hasError("required") &&
      this.form.get("costPresentation").touched
      ? "El campo es requerido."
      : this.form.get("costPresentation").hasError("pattern")
      ? "Ingresa solo números."
      : "";
  }
  getErrorTypePresentation() {
    return this.form.get("typePresentation").hasError("required") &&
      this.form.get("typePresentation").touched
      ? "El campo es requerido."
      : this.form.get("typePresentation").hasError("minlength")
      ? "Mínimo 3 letras."
      : this.form.get("typePresentation").hasError("pattern")
      ? "Ingresa solo letras."
      : "";
  }

  ngOnInit() {
    this.serviceProduct.getTaxShema().subscribe((data) => {
      this.taxSchema = data;
    });
  }

  transformAmount(element) {
    if (
      !this.form.get("costPresentation").value.includes("$") &&
      this.form.get("costPresentation").valid
    ) {
      this.formattedAmount = this.currencyPipe.transform(
        this.form.get("costPresentation").value,
        "$"
      );
      element.target.value = this.formattedAmount;
    }
  }

  onNoClick(): void {
    this.dialogRef.close(true);
  }

  onClickUser(): void {
    let presentation: any = {
      presentation: this.form.get("cuantity").value,
      typePresentation: this.form.get("typePresentation").value,
      pricePresentation: this.form
        .get("costPresentation")
        .value.replace("$", ""),
      taxSchema: this.form.get("taxSchema").value,
    };
    this.dialogRef.close(presentation);
  }
}
