import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { REGEX_NAME, REGEX_NUMBERS } from 'src/app/features/shared/constants';

@Component({
  selector: 'app-register-contacts',
  templateUrl: './register-contacts.component.html',
  styleUrls: ['./register-contacts.component.scss']
})
export class RegisterContactsComponent implements OnInit {
  form: FormGroup;
  contacts: any[]=[
    {value: 'ADMINISTRADOR', viewValue: 'Administrador'},
    {value: 'ALMACEN', viewValue: 'Almacén'},
    {value: 'COBRANZA', viewValue: 'Cobranza'},
    {value: 'COMPRAS', viewValue: 'Compras'},
    {value: 'PAGOS', viewValue: 'Pagos'},
    {value: 'VENTAS', viewValue: 'Ventas'},
    {value: 'OTROS', viewValue: 'Otros'},
  ]

  displayedColumns: string[] = ['position', 'name', 'address', 'phone','email','typeContact'];
  dataSource:any[] = [];

  constructor(
    public dialogRef: MatDialogRef<RegisterContactsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form= new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(REGEX_NAME)
      ]),
      address: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(REGEX_NAME)
      ]),
      phone: new FormControl('',[
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(REGEX_NUMBERS)
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.email
      ]),
      typeContact: new FormControl('',[
        Validators.required,
      ]),
    })
   }

  ngOnInit() {
    this.dataSource= this.data;
  }

  ClosedDialog(){
    this.dialogRef.close();
  } 

  sendData(){
    let obj= this.form.value;
    this.dialogRef.close(obj);
  }

}
