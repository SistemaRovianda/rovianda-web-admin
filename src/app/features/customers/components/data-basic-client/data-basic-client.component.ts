import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { usersSale } from "src/app/features/models/model-clients";
import { ServicesClientsService } from "src/app/features/services/services-clients.service";
import { REGEX_CURP, REGEX_NAME } from "src/app/features/shared/constants";
import { digitsValidator } from 'src/app/features/shared/validators/digits';
import { whitespaceValidator } from "src/app/features/shared/validators/whitespace.validator";

@Component({
  selector: "app-data-basic-client",
  templateUrl: "./data-basic-client.component.html",
  styleUrls: ["./data-basic-client.component.scss"],
})
export class DataBasicClientComponent implements OnInit {
  @Output() dataGeneric = new EventEmitter();
  form: FormGroup;
  users: usersSale[];
  filteredOptions: Observable<usersSale[]>;
  userSale = new FormControl("", [Validators.required]);
  paymentSat:any[]=[]
  typesCfdi:any[]=[]

  constructor(private serviceClient: ServicesClientsService) {
    this.form = new FormGroup({
      keyClient: new FormControl({ value: 0, disabled: true }, [ //correcto númerico
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(
          /^[0-9]\d*$/
        ),
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email,
        whitespaceValidator,
      ]),
      name: new FormControl("", [
        Validators.required,
        Validators.pattern(REGEX_NAME),
        whitespaceValidator,
      ]),
      rfc: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(
          /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$/
        ),
      ]),
      curp: new FormControl("", [
        Validators.required,
        Validators.pattern(REGEX_CURP),
        whitespaceValidator,
      ]),
      phone: new FormControl("", [
        Validators.required,
        whitespaceValidator,
        digitsValidator
      ]),
      // client: new FormControl("", [
      //   Validators.required,
      //   Validators.minLength(3),
      //   Validators.pattern(
      //     /^([a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]+\s)*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]*$/
      //   ),
      // ]),
      currentCredit: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[0-9]\d*$/),
      ]),
      paymentSat: new FormControl("", [
        Validators.required,
      ]),
      cfdi: new FormControl("", [
        Validators.required,
      ]),
      clasification: new FormControl("",[
        Validators.required,
        Validators.maxLength(5),
        // Validators.minLength(5),
        whitespaceValidator,
      ]),
      dayCharge: new FormControl("",[
        Validators.required,
        Validators.minLength(1),
        whitespaceValidator,
        Validators.pattern(/^[0-9]\d*$/)
      ]),
    });
  }

  async ngOnInit() {
    this.serviceClient.getUsersSales("SALESUSER").subscribe((data: usersSale[]) => {
      this.users = data;
    });
      this.serviceClient.getCatalogPagosSat().subscribe((data:any)=>{
        this.paymentSat=data;
      })
      this.serviceClient.getCatalogCfdi().subscribe((data:any)=>{
        this.typesCfdi=data;
      })
    this.filteredOptions = this.userSale.valueChanges.pipe(
      startWith(""),
      map((value) => (value ? this._filter(value) : []))
    );

    this.serviceClient.getNumberCreateClient().subscribe((data: any) => {
      this.form.get('keyClient').setValue(data.count + 1)
    })
  }


  getErrorClient() {
    return this.form.get("client").hasError("required") &&
      this.form.get("client").touched
      ? "Nombre de cliente es requerido."
      : this.form.get("client").hasError("minlength")
        ? "Mínimo 3 letras."
        : this.form.get("client").hasError("pattern")
          ? "No se permiten espacios en blanco."
          : "";
  }
  getErrorRFC() {
    return this.form.get("rfc").hasError("required") &&
      this.form.get("rfc").touched
      ? "RFC de cliente es requerido."
      : this.form.get("rfc").hasError("minlength")
        ? "Mínimo 3 letras."
        : this.form.get("rfc").hasError("pattern")
          ? "No se permiten espacios en blanco."
          : "";
  }
  getErrorCurrentCredit() {
    return this.form.get("currentCredit").hasError("required") &&
      this.form.get("currentCredit").touched
      ? "El crédito es requerido."
      : this.form.get("currentCredit").hasError("minlength")
        ? "Mínimo 3 letras."
        : this.form.get("currentCredit").hasError("pattern")
          ? "No se permiten letras."
          : "";
  }

  getErrorSale() {
    return this.userSale.hasError("required") && this.userSale.touched
      ? "El vendedor es requerido."
      : this.userSale.value.id == undefined
        ? "seleccione un vendedor de la lista."
        : "";
  }

  displayFn(sale: usersSale): string {
    return sale && sale.fullName ? `${sale.fullName}` : "";
  }

  private _filter(name: string) {
    let search: any;
    if (typeof name != "object") {
      const filterValue = name.toLowerCase();
      if (this.users) {
        search = this.users.filter((option) => {
          let name = `${option.fullName.toLowerCase()}`;
          return name.includes(filterValue) ? option : "";
        });
      }
    }
    return search;
  }

  sendData() {
    if (!this.form.invalid && !this.userSale.invalid) {
      let obj = {
        keyClient: this.form.get("keyClient").value,
        name: this.form.get("name").value,
        email: this.form.get("email").value,
        curp: this.form.get("curp").value,
        phone: this.form.get("phone").value,
        rfc: this.form.get("rfc").value,
        currentCredit: this.form.get("currentCredit").value,
        saleuid: this.userSale.value.userId,
        paymentSat: this.form.get('paymentSat').value,
        cfdi: this.form.get('cfdi').value,
        clasification: this.form.get('clasification').value,
        dayCharge: this.form.get('dayCharge').value,
      };
      if (obj.saleuid == undefined) {
        this.userSale.setErrors({ invalid: true });
      } else {
        this.dataGeneric.emit(obj);
      }
    } else {
      this.dataGeneric.emit({});
    }
  }
}
