import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output
} from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "search-form",
  templateUrl: "./search-form.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent implements OnInit {
  form: FormGroup;

  selectedType=[
    {value: "MEAT", title: "Cárnicos"},
    {value: "DRIEF", title: "Secos"},
    {value: "PACKING", title: "Empaques"},
  ]

  @Input() set query(query: string) {
    if (query) {
      this.form.patchValue({ query: query }, { emitEvent: false });
    }
  }

  @Output("onSubmit") submit = new EventEmitter();

  
  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      typeSearch:new FormControl(''),
      query: ""
    });
  }

  ngOnInit() {}

  onSubmit() {
    let valueForm= this.form.value
    if(valueForm.typeSearch != '' && valueForm.query != ''){
      console.log(valueForm)
      this.submit.emit(this.form.value);
    }
  }
}
