import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-reports',
  templateUrl: './date-reports.component.html',
  styleUrls: ['./date-reports.component.scss']
})
export class DateReportsComponent implements OnInit {

  form: FormGroup;
  @Output() dates= new EventEmitter;

  constructor() {
    this.form = new FormGroup({
      dateStart: new FormControl('', [Validators.required]),
      dateEnd: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  sendData() {
    if (this.form.valid) {
      let obj={
        dateStart: JSON.stringify(new Date(this.form.get('dateStart').value)).slice(1, 11),
        dateEnd: JSON.stringify(new Date(this.form.get('dateEnd').value)).slice(1, 11)
      }
      this.dates.emit(obj);
    } else {
      console.log('invalido')
    }
  }

}
