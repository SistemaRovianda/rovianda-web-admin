import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent implements OnInit {

  constructor() { }

  objdataGeneric: any;
  objaddress: any;
  objchecks: any;
  ban: boolean = true

  ngOnInit() {
  }

  dataGeneric(event: any) {
    this.objdataGeneric = event;
    this.valid()
  }

  dataAddress(event: any) {
    this.objaddress = event;
    this.valid()
  }

  check(event: any) {
    this.objchecks = event
    this.valid()
  }

  valid() {
    (this.objdataGeneric != undefined && this.objaddress != undefined && this.objchecks != undefined) ?
      (Object.keys(this.objaddress).length &&
        Object.keys(this.objchecks).length &&
        Object.keys(this.objdataGeneric).length) ? this.ban = false : this.ban = true : this.ban = true;
  }

  sendData() {
    if (this.objdataGeneric != undefined && this.objaddress != undefined && this.objchecks != undefined) {
      if (Object.keys(this.objaddress).length && Object.keys(this.objchecks).length && Object.keys(this.objdataGeneric).length) {
        let obj: any = {
          keyClient: this.objdataGeneric.keyClient,
          client: this.objdataGeneric.client,
          typeClient: this.objchecks.typeClient,
          currentCredit: Number(this.objdataGeneric.currentCredit),
          saleuid: this.objdataGeneric.saleuid,
          rfc: this.objdataGeneric.rfc,
          daysCredit: this.objchecks.daysCredit.filter(Boolean),
          addressClient: this.objaddress
        }
        console.log(obj);
      }
    }
  }

}