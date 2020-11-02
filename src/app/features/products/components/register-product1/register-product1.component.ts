import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { productLine } from "src/app/features/models/model-products";

@Component({
  selector: "app-register-product1",
  templateUrl: "./register-product1.component.html",
  styleUrls: ["./register-product1.component.scss"],
})
export class RegisterProduct1Component implements OnInit {
  private _details: any;
  form: FormGroup;

  @Output() emitterForm = new EventEmitter();
  @Input() public set objDetails(val: any) {
    if (val != undefined) {
      this._details = val;
      this.paint();
    }
  }

  @Input() productLine: productLine;

  constructor() {
    this.form = new FormGroup({
      code: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(
          /^[(áéíóúÁÉÍÓÚñÑ!"#$%&/=?¡¿'ñÑ!"#$%&/=?¡¿'.,*+}\-;:)a-zA-Z0-9(áéíóúÁÉÍÓÚñÑ!"#$%&/=?¡¿'.,*+}\-;:)]+(?:\s[(áéíóúÁÉÍÓÚñÑ!"#$%&/=?¡¿'.,*+}\-;:)a-zA-Z0-9(áéíóúÁÉÍÓÚñÑ!"#$%&/=?¡¿'.,*+}\-;:)]+)*$/
        ),
      ]),

      nameProduct: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(
          /^[(áéíóúÁÉÍÓÚñÑ!"#$%&/=?¡¿'ñÑ!"#$%&/=?¡¿'.,*+}\-;:)a-zA-Z0-9(áéíóúÁÉÍÓÚñÑ!"#$%&/=?¡¿'.,*+}\-;:)]+(?:\s[(áéíóúÁÉÍÓÚñÑ!"#$%&/=?¡¿'.,*+}\-;:)a-zA-Z0-9(áéíóúÁÉÍÓÚñÑ!"#$%&/=?¡¿'.,*+}\-;:)]+)*$/
        ),
      ]),
      productLine: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit() {}

  paint() {
    this.form.controls["code"].setValue(this._details.code);
    this.form.controls["nameProduct"].setValue(this._details.nameProduct);
    this.sendData();
  }

  getErrorCode() {
    return this.form.get("code").hasError("required") &&
      this.form.get("code").touched
      ? "El campo es requerido"
      : this.form.get("code").hasError("minlength")
      ? "Minimo 3 letras"
      : this.form.get("code").hasError("pattern")
      ? "No se permiten espacios en blanco"
      : "";
  }
  getErrorNameProduct() {
    return this.form.get("nameProduct").hasError("required") &&
      this.form.get("nameProduct").touched
      ? "El campo es requerido"
      : this.form.get("nameProduct").hasError("minlength")
      ? "Minimo 3 letras"
      : this.form.get("nameProduct").hasError("pattern")
      ? "No se permiten espacios en blanco"
      : "";
  }

  sendData() {
    let obj: any;
    if (this.form.valid) {
      obj = {
        clave: this.form.get("code").value,
        name: this.form.get("nameProduct").value,
        productLine: this.form.get("productLine").value,
      };
      console.log("Emision de datos:"+JSON.stringify(obj));
      this.emitterForm.emit(obj);
    } else {
      this.emitterForm.emit({});
    }
  }
}
