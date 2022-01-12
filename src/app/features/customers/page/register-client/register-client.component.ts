import { Component, OnInit } from "@angular/core";
import { ServicesClientsService } from "src/app/features/services/services-clients.service";
import { DialogComponent } from "../../../../features/products/components/dialog/dialog.component";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { RegisterContactsComponent } from '../../components/register-contacts/register-contacts.component';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-register-client",
  templateUrl: "./register-client.component.html",
  styleUrls: ["./register-client.component.scss"],
})
export class RegisterClientComponent implements OnInit {
  dialogValues: any[] = [];
  constructor(
    private servicesClient: ServicesClientsService,
    private router:Router,
    public dialog: MatDialog
  ) { }

  form:FormGroup;
  sellersList:any[]=[];
  ngOnInit() { 
    this.form = new FormGroup({
      clientCode: new FormControl(null,Validators.required),
      clientCodeAssigned: new FormControl(null,Validators.required),
      clientName: new FormControl(null,Validators.required),
      clientType: new FormControl("CONTADO",Validators.required),
      clientCredit: new FormControl(null),
      clientCurrentCredit: new FormControl(null),
      clientRfc: new FormControl(null,Validators.required),
      clientStreet: new FormControl(null),
      clientSuburb: new FormControl(null),
      clientMunicipality: new FormControl(null),
      clientLocality: new FormControl(null),
      clientCp: new FormControl(null),
      clientExtNumber: new FormControl(null),
      clientState: new FormControl(null),
      clientNationality: new FormControl(null),
      clientSeller: new FormControl(null,Validators.required),
      monday: new FormControl(false),
      tuesday: new FormControl(false),
      wednesday: new FormControl(false),
      thursday: new FormControl(false),
      friday: new FormControl(false),
      saturday: new FormControl(false),
      sunday: new FormControl(false)
    });
    
    
  }
  get clientState(){
    return this.form.get("clientState");
  }
  get clientNationality(){
    return this.form.get("clientNationality");
  }
  get clientExtNumber(){
    return this.form.get("clientExtNumber");
  }
  get clientSeller(){
    return this.form.get("clientSeller");
  }
  get clientMunicipality(){
    return this.form.get("clientMunicipality");
  }
  get clientLocality(){
    return this.form.get("clientLocality");
  }
  get clientCp(){
    return this.form.get("clientCp");
  }
  get clientSuburb(){
    return this.form.get("clientSuburb");
  }
  get clientStreet(){
    return this.form.get("clientStreet");
  }
  get clientRfc(){
    return this.form.get("clientRfc");
  }
  get clientCredit(){
    return this.form.get("clientCredit");
  }
  get clientCurrentCredit(){
    return this.form.get("clientCurrentCredit");
  }
  get clientCode(){
    return this.form.get("clientCode");
  }
  get clientCodeAssigned(){
    return this.form.get("clientCodeAssigned");
  }
  get clientName(){
    return this.form.get("clientName");
  }
  get clientType(){
    return this.form.get("clientType");
  }
  clientData:any=null;
  
  search(){
    this.isLoading= true;
    if(this.clientCode.value!=null && this.clientCode.value!=""){
      this.servicesClient.getClientSaeByCode(this.clientCode.value).subscribe((clientData:any)=>{
        this.clientData=clientData;
        this.clientName.setValue(clientData.NOMBRE);
        this.clientCredit.setValue(clientData.LIM_CREDITO);
        this.clientCurrentCredit.setValue(clientData.SALDO);
        this.clientRfc.setValue(clientData.RFC);
        this.clientStreet.setValue(clientData.CALLE);
        this.clientSuburb.setValue(clientData.COLONIA);
        this.clientMunicipality.setValue(clientData.MUNICIPIO);
        this.clientLocality.setValue(clientData.LOCALIDAD);
        this.clientCp.setValue(clientData.CODIGO);
        this.clientExtNumber.setValue(clientData.NUMEXT);
        this.clientNationality.setValue(clientData.NACIONALIDAD);
        this.clientState.setValue(clientData.ESTADO);
        this.servicesClient.getNumberCreateClient().subscribe((codeToSystem:{clientCode:number})=>{
          this.clientCodeAssigned.setValue(codeToSystem.clientCode+1);
        });
        this.servicesClient.getAllSellers().subscribe((sellers:any[])=>{
          this.sellersList = sellers;
        });
        this.isLoading=false;
      },(err)=>{
        this.isLoading=false;
      });
    }
  }
  isLoading:boolean=false;
  cancel(){
    this.router.navigateByUrl("/customers/list-clients");
  }
  regist(){
    if(this.form.valid && !this.isLoading){
      this.isLoading = true;
        this.servicesClient.registerClient(this.form.value).subscribe(()=>{
            this.isLoading=false;
            this.form.reset();
        },(err)=>{
          this.isLoading=false;
        });
    }
  }

}
