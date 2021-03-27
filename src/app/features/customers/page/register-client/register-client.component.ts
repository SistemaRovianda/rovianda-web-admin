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

  rfcRequired:boolean = false;
  check(event: any) {
    this.objchecks = event;
    this.valid('checks');
    if(this.objchecks.typeClient=="CREDITO"){
      this.rfcRequired = true;
    }else if(this.objchecks.typeClient="CONTADO"){
      this.rfcRequired=false;
    }
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
    if(this.rfcRequired==true && this.objdataGeneric.rfc==""){
      this.openDialogConfirm({
        title: "Rfc Requerido",
        msg: `Si el cliente es crédito debe llevar RFC obligatoriamente.`,
      });
    }else if(this.rfcRequired==true && this.objchecks.daysCredit==null){
      this.openDialogConfirm({
        title: "Días de crédito requeridos",
        msg: `Si el cliente es crédito debe días de crédito.`,
      });
    }else if(this.objdataGeneric.monday==false && this.objdataGeneric.tuesday==false && this.objdataGeneric.wednesday==false &&
      this.objdataGeneric.thursday==false && this.objdataGeneric.friday==false && this.objdataGeneric.saturday==false && this.objdataGeneric.sunday==false){
        this.openDialogConfirm({
          title: "Días de visita del vendedor requeridos",
          msg: `Favor de seleccionar los días en los que el vendedor asignado visitará al cliente.`,
        });
    }else{
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
          clasification: this.objdataGeneric.clasification,
          daysVisited:{
            monday: this.objdataGeneric.monday,
            tuesday: this.objdataGeneric.tuesday,
            wednesday: this.objdataGeneric.wednesday,
            thursday: this.objdataGeneric.thursday,
            friday: this.objdataGeneric.friday,
            saturday: this.objdataGeneric.saturday,
            sunday: this.objdataGeneric.sunday
          }
        };
      //  falta consumir el servicio
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
