import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-client',
  templateUrl: './address-client.component.html',
  styleUrls: ['./address-client.component.scss']
})
export class AddressClientComponent implements OnInit {

  form: FormGroup;
  @Output() addressSend= new EventEmitter;

  constructor() {
    this.form = new FormGroup({
      state: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^([a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]+\s)*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]*$/)
      ]),
      municipality: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^([a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]+\s)*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]*$/)
      ]),
      location: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^([a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]+\s)*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]*$/)
      ]),
      suburb: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^([a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]+\s)*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]*$/)
      ]),
      street: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^([a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]+\s)*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]*$/)
      ]),
      numberExt: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[0-9]\d*$/)
      ]),
      reference: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^([a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]+\s)*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]*$/)
      ]),
    })
  }

  getErrorState() {
    return this.form.get('state').hasError('required') && this.form.get('state').touched ? 'El estado es requerido.'
      : this.form.get('state').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('state').hasError('pattern') ? 'No se permiten espacios en blanco.'
          : '';
  }
  getErrorMunicipality() {
    return this.form.get('municipality').hasError('required') && this.form.get('municipality').touched ? 'El municipio es requerido.'
      : this.form.get('municipality').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('municipality').hasError('pattern') ? 'No se permiten espacios en blanco.'
          : '';
  }
  getErrorLocation() {
    return this.form.get('location').hasError('required') && this.form.get('location').touched ? 'La localidad es requerida.'
      : this.form.get('location').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('location').hasError('pattern') ? 'No se permiten espacios en blanco.'
          : '';
  }
  getErrorSuburb() {
    return this.form.get('suburb').hasError('required') && this.form.get('suburb').touched ? 'la colonia es requerida.'
      : this.form.get('suburb').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('suburb').hasError('pattern') ? 'No se permiten espacios en blanco.'
          : '';
  }
  getErrorStreet() {
    return this.form.get('street').hasError('required') && this.form.get('street').touched ? 'la calle es requerida.'
      : this.form.get('street').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('street').hasError('pattern') ? 'No se permiten espacios en blanco.'
          : '';
  }
  getErrorNumberExt() {
    return this.form.get('numberExt').hasError('required') && this.form.get('numberExt').touched ? 'El número ext. es requerido.'
      : this.form.get('numberExt').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('numberExt').hasError('pattern') ? 'No se permiten letras.'
          : '';
  }
  getErrorReference() {
    return this.form.get('reference').hasError('required') && this.form.get('reference').touched ? 'las referencias son requeridas.'
      : this.form.get('reference').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('reference').hasError('pattern') ? 'No se permiten espacios en blanco.'
          : '';
  }

  ngOnInit() {
  }

  sendData() {
    if (this.form.valid) {
      let obj: any = {
        state: this.form.get('state').value,
        municipality: this.form.get('municipality').value,
        location: this.form.get('location').value,
        suburb: this.form.get('suburb').value,
        extNumber: this.form.get('numberExt').value,
        street: this.form.get('street').value,
        reference: this.form.get('reference').value
      }
      this.addressSend.emit(obj)
    }else{
      this.addressSend.emit({})

    }
  }

}
