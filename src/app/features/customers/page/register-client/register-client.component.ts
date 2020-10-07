import { Component, OnInit } from "@angular/core";
import { ServicesClientsService } from "src/app/features/services/services-clients.service";
import { DialogComponent } from "../../../../features/products/components/dialog/dialog.component";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { RegisterContactsComponent } from '../../components/register-contacts/register-contacts.component';

@Component({
  selector: "app-register-client",
  templateUrl: "./register-client.component.html",
  styleUrls: ["./register-client.component.scss"],
})
export class RegisterClientComponent implements OnInit {
  dialogValues: any[] = [];
  constructor(
    private servicesClient: ServicesClientsService,
    // public dialogRef: MatDialogRef<DialogComponent>,
    public dialog: MatDialog
  ) { }

  objdataGeneric: any;
  objaddress: any;
  objchecks: any;
  ban: boolean = true;

  ngOnInit() { }

  dataGeneric(event: any) {
    this.objdataGeneric = event;
    this.valid('generico');
  }

  dataAddress(event: any) {
    this.objaddress = event;
    this.valid('dirección');
  }

  check(event: any) {
    this.objchecks = event;
    this.valid('checks');
  }

  valid(lugar) {
    console.log(lugar)
    this.objdataGeneric != undefined &&
      this.objaddress != undefined &&
      this.objchecks != undefined
      ? Object.keys(this.objaddress).length &&
        Object.keys(this.objchecks).length &&
        Object.keys(this.objdataGeneric).length
        ? (this.ban = false)
        : (this.ban = true)
      : (this.ban = true);
  }

  sendData() {
    if (
      this.objdataGeneric != undefined &&
      this.objaddress != undefined &&
      this.objchecks != undefined
    ) {
      if (
        Object.keys(this.objaddress).length &&
        Object.keys(this.objchecks).length &&
        Object.keys(this.objdataGeneric).length
      ) {
        let obj: any = {
          keyClient: this.objdataGeneric.keyClient,
          name: this.objdataGeneric.name,
          email: this.objdataGeneric.email,
          curp: this.objdataGeneric.curp,
          phone: this.objdataGeneric.phone,
          rfc: this.objdataGeneric.rfc,
          currentCredit: Number(this.objdataGeneric.currentCredit),
          saleUid: this.objdataGeneric.saleuid,
          // client: this.objdataGeneric.client,
          typeClient: this.objchecks.typeClient,
          daysCredit: this.objchecks.daysCredit,
          dayCharge: this.objdataGeneric.dayCharge,
          addressClient: this.objaddress,
          cfdi: this.objdataGeneric.cfdi,
          paymentSat: this.objdataGeneric.paymentSat,
          contacts: this.dialogValues,
          clasification: this.objdataGeneric.clasification
        };
        // falta consumir el servicio
        this.servicesClient.postCustomerCreated(obj).subscribe(
          (data) => {
            this.openDialogConfirm({
              title: "Cliente Agregado",
              msg: `Se agrego el cliente correctamente.`,
            });
          },
          (err) => {
            this.openDialogConfirm({
              title: "Error al agregar cliente",
              msg: `No se ha podido agregar al cliente.`,
            });
          }
        );
        console.log(obj);
      }
    }
  }

  openDialogConfirm(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    this.dialog.open(DialogComponent, dialogConfig);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.dialogValues;
    const dialogRef = this.dialog.open(RegisterContactsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialogValues.push(result);
      }
    });
  }

  resetcomponent() {
    this.objdataGeneric = undefined;
    this.objaddress = undefined;
    this.objchecks = undefined;
  }
}
