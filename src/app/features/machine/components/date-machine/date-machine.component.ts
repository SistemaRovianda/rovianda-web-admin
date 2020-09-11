import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-date-machine",
  templateUrl: "./date-machine.component.html",
  styleUrls: ["./date-machine.component.scss"],
})
export class DateMachineComponent implements OnInit {
  form: FormGroup;
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

  ngOnInit() {}

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
}
