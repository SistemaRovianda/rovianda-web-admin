import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FridgesService } from 'src/app/features/services/fridges.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-fridge',
  templateUrl: './create-fridge.component.html',
  styleUrls: ['./create-fridge.component.scss']
})
export class CreateFridgeComponent implements OnInit {

  temp = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.pattern(/^[\-]?[0-9]\d*$/)
  ])
  @Output() newFridge = new EventEmitter;
  constructor(private serviceFridges: FridgesService) { }
  listFridges: any;
  ngOnInit() {
    this.getListFridges();
  }

  getListFridges() {
    this.serviceFridges.getFridges().subscribe((data) => {
      this.listFridges = data;
    })
  }

  getErrorFridge() {
    return this.temp.hasError('required') &&
      this.temp.touched ? 'El campo es requerido' :
      this.temp.hasError('minlength') ? 'Mínimo se requiere un catacter' :
        this.temp.hasError('pattern') ? 'No se permiten letras'
          : '';
  }

  sendData(event) {
    if (this.temp.valid) {
      let obj = {
        tempOfFridge: Number(this.temp.value)
      }
      this.serviceFridges.postFridge(obj).subscribe((data) => {
        this.temp.reset()
        this.getListFridges();
      })
    }
  }

  deleteItem(event) {
    console.log(event);
    this.serviceFridges.deleteFridge(event.fridge_id).subscribe((data) => {
      this.getListFridges()
    })
  }

}
