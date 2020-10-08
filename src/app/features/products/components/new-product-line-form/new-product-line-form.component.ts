import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "new-product-line-form",
  templateUrl: "./new-product-line-form.component.html",
  styleUrls: ["./new-product-line-form.component.scss"],
})
export class NewProductLineFormComponent implements OnInit {
  @Output("onSubmit") _submit = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      clave: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit(): void {
    this._submit.emit(this.form.value);
  }
}
