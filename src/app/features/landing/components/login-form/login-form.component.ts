import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output
} from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
@Component({
  selector: "login-form",
  templateUrl: "./login-form.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: "loginForm"
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;

  shouldHidePassword = true;

  @Output("onSubmit") submit = new EventEmitter();

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.submit.emit(this.form.value);
  }

  shouldDisable() {
    return this.form.invalid;
  }

  togglePassword() {
    this.shouldHidePassword = !this.shouldHidePassword;
  }

  get passwordVisibilityIcon() {
    return this.shouldHidePassword ? "visibility_off" : "visibility";
  }
}
