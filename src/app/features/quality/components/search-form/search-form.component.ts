import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "search-form",
  templateUrl: "./search-form.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent implements OnInit {
  form: FormGroup;

  @Input() set query(query: string) {
    if (query) {
      this.form.patchValue({ query }, { emitEvent: false });
    }
  }

  @Output("onSubmit") submit = new EventEmitter();

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      query: ""
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.submit.emit(this.form.value);
  }
}
