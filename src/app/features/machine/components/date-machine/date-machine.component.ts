import { Component, OnInit, Output, EventEmitter, Input, ViewChildren, QueryList } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-date-machine",
  templateUrl: "./date-machine.component.html",
  styleUrls: ["./date-machine.component.scss"],
})
export class DateMachineComponent implements OnInit {

  @ViewChildren('checkBox') checkBox: QueryList<any>;
  checked = [];
  @ViewChildren('checkBox2') checkBox2: QueryList<any>;
  checked2 = [];
  @Output() emitterForm = new EventEmitter();

  form: FormGroup;
  _devices: any = [];
  _store: any = [];
  @Input() public set device(data: any) {
    this._devices = data;
    console.log("recive: ", this._devices)
  }
  @Input() public set store(data: any) {
    this._store = data;
    console.log("recive tienda: ", this._store)

  }
  @Output() dates = new EventEmitter();

  constructor() {
    this.form = new FormGroup({
      dateStart: new FormControl({ disabled: true, value: "" }, [
        Validators.required,
      ]),
      dateEnd: new FormControl({ disabled: true, value: "" }, [
        Validators.required,
      ]),
    });
  }

  ngOnInit() { }

  sendData() {
    let obj = {
      dateInit: JSON.stringify(
        new Date(this.form.get("dateStart").value)
      ).slice(1, 11),
      dateEnd: JSON.stringify(new Date(this.form.get("dateEnd").value)).slice(
        1,
        11
      ),
    };
    this.dates.emit(obj);
  }

  getCheckbox(checkbox) {
    this.checked = []; // resetting each Time new event is fire.
    // filtering only checked vlaue and assign to checked variable.
    const checked = this.checkBox.filter(checkbox => checkbox.checked);

    // then, we make object array of checked, and value by checked variable  
    checked.forEach(data => {
      this.checked.push({
        'checked': data.checked,
        'value': data.value,
      })
    })
    this.sendObj();
  }

  getCheckbox2(checkbox) {
    this.checked2 = []; // resetting each Time new event is fire.
    // filtering only checked vlaue and assign to checked variable.
    const checked2 = this.checkBox2.filter(checkbox => checkbox.checked);

    // then, we make object array of checked, and value by checked variable  
    checked2.forEach(data => {
      this.checked2.push({
        'checked': data.checked,
        'value': data.value,
        'machine':"machine",
      })
    })
    this.sendObj();
  }

  sendObj(){
    this.emitterForm.emit(this.checked.concat(this.checked2));
  }
}
