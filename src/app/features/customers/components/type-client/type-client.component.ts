import { Component, OnInit, Output, EventEmitter, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Days } from '../../../models/model-clients';
import { MatCheckbox } from '@angular/material';
@Component({
  selector: 'app-type-client',
  templateUrl: './type-client.component.html',
  styleUrls: ['./type-client.component.scss']
})
export class TypeClientComponent implements OnInit {

  arrdays: Array<object> = Days;
  form: FormGroup;
  ban: boolean = true;
  reset: boolean = false;
  @Output() objTypeCredit = new EventEmitter;
  typeClient = new FormControl(true)
  @ViewChildren("checkboxes") checkboxes: QueryList<MatCheckbox>;
  @ViewChildren("checkType") checkType: QueryList<MatCheckbox>;
  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      daysCredit: new FormControl('')
    })
  }

  ngOnInit() {
    this.sendData()
  }

  valid(value) {
    let a = JSON.parse(value);
    this.typeClient.setValue(a);
    this.ban = this.typeClient.value;
    this.sendData()
  }

  sendData() {
    console.log(this.typeClient.value)
    if (this.typeClient.value) {
      if (this.form.get('daysCredit').value != 0) {
        this.checkTypefun();
        let obj = {
          typeClient: "CREDITO",
          daysCredit: this.form.get('daysCredit').value
        }
        console.log(obj)
        this.objTypeCredit.emit(obj)
      }
    } else {
      let obj = {
        typeClient: "CONTADO",
        daysCredit: []
      }
      this.form.get('daysCredit').reset()
      this.uncheckAll()
      this.objTypeCredit.emit(obj)
    }
  }

  uncheckAll() { this.checkboxes.forEach(element => element.checked = false) }
  checkTypefun() { this.checkType.forEach(element => element.checked = true) }

  updateChkbxArray(id) {
    console.log(id)
    // this.valid(1)
    // const chkArray = 
    this.form.get('daysCredit').setValue(id);
    // if (isChecked) {
      // chkArray.push(new FormControl(id));
    //   this.sendData()
    // } else {
      // let idx = chkArray.controls.findIndex(x => x.value == id);
      // chkArray.removeAt(idx);
      this.sendData()
    // }
  }
}
