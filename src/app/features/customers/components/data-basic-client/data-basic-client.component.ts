import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesClientsService } from 'src/app/features/services/services-clients.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { usersSale } from 'src/app/features/models/model-clients';

@Component({
  selector: 'app-data-basic-client',
  templateUrl: './data-basic-client.component.html',
  styleUrls: ['./data-basic-client.component.scss']
})
export class DataBasicClientComponent implements OnInit {

  @Output() dataGeneric = new EventEmitter;
  form: FormGroup;
  users: usersSale[];
  filteredOptions: Observable<usersSale[]>;
  userSale = new FormControl('', [
    Validators.required
  ])
  constructor(
    private serviceClient: ServicesClientsService
  ) {
    this.form = new FormGroup({
      keyClient: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^([a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]+\s)*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]*$/)
      ]),
      client: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^([a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]+\s)*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]*$/)
      ]),
      rfc: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$/)
      ]),
      currentCredit: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[0-9]\d*$/)
      ]),
    })

  }

  async ngOnInit() {
    await this.serviceClient.getUsersSales('SALESUSER').subscribe((data: usersSale[]) => {
      this.users = data;
    })
    this.filteredOptions = this.userSale.valueChanges.pipe(
      startWith(''),
      map(value => value ? this._filter(value) : [])
    );
  }

  getErrorKeyClient() {
    return this.form.get('keyClient').hasError('required') && this.form.get('keyClient').touched ? 'La clave es requerida.'
      : this.form.get('keyClient').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('keyClient').hasError('pattern') ? 'No se permiten espacios en blanco.'
          : '';
  }
  getErrorClient() {
    return this.form.get('client').hasError('required') && this.form.get('client').touched ? 'Nombre de cliente es requerido.'
      : this.form.get('client').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('client').hasError('pattern') ? 'No se permiten espacios en blanco.'
          : '';
  }
  getErrorRFC() {
    return this.form.get('rfc').hasError('required') && this.form.get('rfc').touched ? 'RFC de cliente es requerido.'
      : this.form.get('rfc').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('rfc').hasError('pattern') ? 'No se permiten espacios en blanco.'
          : '';
  }
  getErrorCurrentCredit() {
    return this.form.get('currentCredit').hasError('required') && this.form.get('currentCredit').touched ? 'El crédito es requerido.'
      : this.form.get('currentCredit').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('currentCredit').hasError('pattern') ? 'No se permiten letras.'
          : '';
  }

  getErrorSale() {
    return this.userSale.hasError('required') && this.userSale.touched ? 'El vendedor es requerido.'
      : (this.userSale.value.id == undefined) ? 'seleccione un vendedor de la lista.'
        : '';
  }

  displayFn(sale: usersSale): string {
    return sale && sale.fullName ? `${sale.fullName}` : '';
  }

  private _filter(name: string) {
    let search: any;
    if (typeof (name) != 'object') {
      const filterValue = name.toLowerCase();
      if (this.users) {
        search = this.users.filter(option => {
          let name = `${option.fullName.toLowerCase()}`
          return name.includes(filterValue) ? option : ''
        })
      }
    }
    return search;
  }

  sendData() {
    if (!this.form.invalid && !this.userSale.invalid) {
      let obj = {
        keyClient: this.form.get('keyClient').value,
        client: this.form.get('client').value,
        currentCredit: this.form.get('currentCredit').value,
        saleuid: this.userSale.value.userId,
        rfc: this.form.get('rfc').value,
      }
      if(obj.saleuid == undefined){
        this.userSale.setErrors({ invalid: true })
      }else{
        this.dataGeneric.emit(obj);
      }
    }else{
      this.dataGeneric.emit({});
    }
  }
}
