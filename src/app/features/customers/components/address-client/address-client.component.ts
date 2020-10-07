import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-client',
  templateUrl: './address-client.component.html',
  styleUrls: ['./address-client.component.scss']
})
export class AddressClientComponent implements OnInit {

  form: FormGroup;
  @Output() addressSend = new EventEmitter;

  constructor() {
    this.form = new FormGroup({
      street: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^([a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]+\s)*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]*$/)
      ]),
      intNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[0-9]\d*$/)
      ]),
      extNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[0-9]\d*$/)
      ]),
      intersectionOne: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^([a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]+\s)*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]*$/)
      ]),
      intersectionTwo: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^([a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]+\s)*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]*$/)
      ]),
      suburb: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^([a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]+\s)*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]*$/)
      ]),
      location: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^([a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]+\s)*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]*$/)
      ]),
      reference: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^([a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]+\s)*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]*$/)
      ]),
      population: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^([a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]+\s)*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]*$/)
      ]),
      cp: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[0-9]\d*$/)
      ]),
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
      nationality: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^([a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]+\s)*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ.,;&"'-_()]*$/)
      ])
    })
  }

  getErrorStreet() {
    return this.form.get('street').hasError('required') && this.form.get('street').touched ? 'la calle es requerida.'
      : this.form.get('street').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('street').hasError('pattern') ? 'No se permiten espacios en blanco.'
          : '';
  } 
  getErrorNumberExt() {
    return this.form.get('extNumber').hasError('required') && this.form.get('extNumber').touched ? 'El número ext. es requerido.'
      : this.form.get('extNumber').hasError('minlength') ? 'Mínimo 1 caracter.'
        : this.form.get('extNumber').hasError('pattern') ? 'No se permiten letras.'
          : '';
  }
  getErrorNumberInt() {
    return this.form.get('intNumber').hasError('required') && this.form.get('intNumber').touched ? 'El número int. es requerido.'
      : this.form.get('intNumber').hasError('minlength') ? 'Mínimo 1 caracter.'
        : this.form.get('intNumber').hasError('pattern') ? 'No se permiten letras.'
          : '';
  }
  getErroriInterceptionOne() {
    return this.form.get('intersectionOne').hasError('required') && this.form.get('intersectionOne').touched ? 'La intercepción es requerida.'
      : this.form.get('intersectionOne').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('intersectionOne').hasError('pattern') ? 'No se permiten espacios en blanco.'
          : '';
  }
  getErroriInterceptionTwo() {
    return this.form.get('intersectionTwo').hasError('required') && this.form.get('intersectionTwo').touched ? 'La intercepción es requerida.'
      : this.form.get('intersectionTwo').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('intersectionTwo').hasError('pattern') ? 'No se permiten espacios en blanco.'
          : '';
  }
  getErrorSuburb() {
    return this.form.get('suburb').hasError('required') && this.form.get('suburb').touched ? 'la colonia es requerida.'
      : this.form.get('suburb').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('suburb').hasError('pattern') ? 'No se permiten espacios en blanco.'
          : '';
  }
  getErrorLocation() {
    return this.form.get('location').hasError('required') && this.form.get('location').touched ? 'La localidad es requerida.'
      : this.form.get('location').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('location').hasError('pattern') ? 'No se permiten espacios en blanco.'
          : '';
  }
  getErrorPopulation() {
    return this.form.get('population').hasError('required') && this.form.get('population').touched ? 'La población es requerida.'
      : this.form.get('population').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('population').hasError('pattern') ? 'No se permiten espacios en blanco.'
          : '';
  }
  getErrorCp() {
    return this.form.get('cp').hasError('required') && this.form.get('cp').touched ? 'El código postal es requerido.'
      : this.form.get('cp').hasError('minlength') ? 'Mínimo 3 caracteres.'
        : this.form.get('cp').hasError('pattern') ? 'No se permiten letras.'
          : '';
  }
  getErrorState() {
    return this.form.get('state').hasError('required') && this.form.get('state').touched ? 'El estado es requerido.'
      : this.form.get('state').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('state').hasError('pattern') ? 'No se permiten espacios en blanco.'
          : '';
  }
  getErrorReference() {
    return this.form.get('reference').hasError('required') && this.form.get('reference').touched ? 'las referencias son requeridas.'
      : this.form.get('reference').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('reference').hasError('pattern') ? 'No se permiten espacios en blanco.'
          : '';
  }
  
  getErrorMunicipality() {
    return this.form.get('municipality').hasError('required') && this.form.get('municipality').touched ? 'El municipio es requerido.'
      : this.form.get('municipality').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('municipality').hasError('pattern') ? 'No se permiten espacios en blanco.'
          : '';
  }

  getErrorNationality() {
    return this.form.get('state').hasError('required') && this.form.get('state').touched ? 'El estado es requerido.'
      : this.form.get('state').hasError('minlength') ? 'Mínimo 3 letras.'
        : this.form.get('state').hasError('pattern') ? 'No se permiten espacios en blanco.'
          : '';
  }

  ngOnInit() {
  }

  sendData() {
    if (this.form.valid) {
      let obj: any = {
        street: this.form.get('street').value,
        intNumber: this.form.get('intNumber').value,
        extNumber: this.form.get('extNumber').value,
        intersectionOne: this.form.get('intersectionOne').value,
        intersectionTwo: this.form.get('intersectionTwo').value,
        suburb: this.form.get('suburb').value,
        location: this.form.get('location').value,
        reference: this.form.get('reference').value,
        population: this.form.get('population').value,
        cp: this.form.get('cp').value,
        state: this.form.get('state').value,
        municipality: this.form.get('municipality').value,
        nationality: this.form.get('nationality').value,
      }
      this.addressSend.emit(obj)
    } else {
      this.addressSend.emit({})

    }
  }

}
