import { Component, OnInit, SystemJsNgModuleLoader } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { role } from "../../../shared/models/role.interface";
import { ToastrService } from 'ngx-toastr';
import { AddUserService } from "src/app/features/services/add-user.service";
import { catchError } from "rxjs/operators";
import { WarehouseModel } from "src/app/features/models/mode-warehouse";
import { Seller, SimpleUserUpdateRequest, UserPreSaleRegisterRequest, UserPreSaleUpdateRequest, UserRegisterRequest, UserRegisterResponse, UserSellerRegisterRequest, UserSellerUpdateRequest, listSellerItem } from "src/app/features/models/models-seller";
import { SellerService } from "src/app/features/services/seller.service";
import { MatDialog } from "@angular/material";
import { ListAllSellersComponent } from "../components/list-all-sellers/list-all-sellers.component";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-add-user-page",
  templateUrl: "./add-user-page.component.html",
  styleUrls: ["./add-user-page.component.scss"],
})
export class AddUserPageComponent implements OnInit {
  showingPassword:boolean=false;
  showingPasswordConfirm:boolean=false;
  passwordEquals:boolean=true;
  isLoading:boolean=false;
  msgService:string="";
  showMsg:boolean=false;
  showMsgError:boolean=false;
  form: FormGroup;
  warehouses:WarehouseModel[]=[];
  sellersSelected: { name: string, id: string, isSelected: boolean, key: number }[] = [];
  allSellers: boolean = false;
  sellers: Seller[] = [];
  sellersAll: Seller[] = [];
  updateCorrect:boolean=false;
  get name(){
    return this.form.get("name");
  }
  get email(){
    return this.form.get("email");
  }
  get password(){
    return this.form.get("password");
  }
  get passwordConfirm(){
    return this.form.get("passwordConfirm");
  }
  get rol(){
    return this.form.get("rol");
  }
  get claveSAE(){
    return this.form.get("claveSAE");
  }
  get warehouseId(){
    return this.form.get("warehouseId");
  }
  get folio(){
    return this.form.get("folio");
  }

  get folioPreSale(){
    return this.form.get("folioPreSale");
  }

  get jobDescription(){
    return this.form.get("jobDescription");  
  }

  rols:string[] =["SALESUSER","SUCURSAL","SUCURSAL_PLUS","SUPERMARKET"];
  currentId:string="";
  typeOperation:string="";
  currentRol:string="";
  constructor(
    private fb: FormBuilder,
    private toast: ToastrService,
    private addUserService:AddUserService,
    private sellerService:SellerService,
    private dialog:MatDialog,
    private route: ActivatedRoute,
    private router:Router
  ) {
    this.route.queryParams.subscribe(params => {
      this.typeOperation=params['type'];
      this.currentRol=params['rol'];
      });  
      this.route.params.subscribe(params=>{
        this.currentId=params['uid'];
      })
  }
  
  
  ngOnInit(): void {
    
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      passwordConfirm: [null, [Validators.required]],
      jobDescription: [null,[Validators.required]],
      rol: [null, [Validators.required]],
      claveSAE: [{value:null,disabled:true},[Validators.required]],
      warehouseId:[{value:null,disabled:true},[Validators.required]],
      folio: [{value:'',disabled: true},[Validators.required]],
      folioPreSale: [{value:'',disabled:true},[Validators.required]]
    });
  
    this.password.valueChanges.subscribe(()=>{
      this.checkPassword();
    });
    this.passwordConfirm.valueChanges.subscribe(()=>{
      this.checkPassword();
    });
    if(this.typeOperation=="CREATE"){
      this.form.get("rol").valueChanges.subscribe(x=>{
          if(this.rols.includes(x)){
            this.toast.info("Comunicando con la nube", "Obteniendo identificador de vendedor");
            this.addUserService.getIdSeller().subscribe(({count})=>{
              count++;
              this.claveSAE.setValue(+count);
              this.claveSAE.enable();
            })
            this.addUserService.getAllWarehouses().subscribe((warehouses:WarehouseModel[])=>{
              warehouses=warehouses.filter(x=>(x.ENCARGADO==null || !((x.ENCARGADO as string).includes("ASSIGNED") || x.CVE_ALM=="53") && x.DESCR!=null));
              this.warehouses=warehouses;
            });
            this.warehouseId.enable();
            this.folio.enable();
            this.folio.reset();
            this.folioPreSale.disable();
            this.folioPreSale.reset();
          }else if(x=="PRESALE"){
            this.claveSAE.disable();
            this.claveSAE.reset();
            this.warehouseId.disable();
            this.warehouseId.reset();
            this.jobDescription.enable();
            this.jobDescription.reset();
            this.folio.disable();
            this.folio.reset();
            this.folioPreSale.enable();
            this.sellerService.getAllSeller().subscribe(sellers=>{
              this.sellers=sellers.filter(x=>x.cve!=null);
              this.sellersAll = this.sellers;
            });
          }else{
            this.folio.disable();
            this.folio.reset();
            this.folioPreSale.disable();
            this.folioPreSale.reset();
            this.claveSAE.disable();
            this.claveSAE.reset();
            this.warehouseId.disable();
            this.warehouseId.reset();
          }
      });
    }else{
      
      this.fillData();
    }
    
  }
  fillData(){
    if(this.currentRol=="PRESALE"){
      this.sellerService.getAllSeller().subscribe(sellers=>{
        this.sellers=sellers.filter(x=>x.cve!=null);
        this.sellersAll = this.sellers;
      });
        this.isLoading=true;
        this.addUserService.getPreSaleUser(this.currentId).subscribe((details)=>{
          this.isLoading=false;
          this.rol.setValue(this.currentRol);
          this.name.setValue(details.name);
          this.email.setValue(details.email);
          this.email.disable();
          this.jobDescription.setValue(details.jobDescription);
          this.folioPreSale.setValue(details.folio);
          this.folioPreSale.enable();
          this.sellersSelected=this.sellersAll.filter(x=>details.sellers.includes(x.id)).map((x, index) => ({
            id: x.id,
            isSelected: true,
            key: index + 1,
            name: x.name
          }));
        },(err)=>{
          this.isLoading=false;
          this.setMsg(err.error.msg,"ERROR")
        })
    }else if(this.rols.includes(this.currentRol)){
      this.isLoading=true;
      this.addUserService.getSellerUserDetails(this.currentId).subscribe((details)=>{
        this.addUserService.getAllWarehouses().subscribe((warehouses:WarehouseModel[])=>{
          let currentWarehouse:WarehouseModel[] = warehouses.filter(x=>x.CVE_ALM==details.warehouseId);
          warehouses=warehouses.filter(x=> (x.ENCARGADO==null && !(x.ENCARGADO as string).includes("ASSIGNED") && x.CVE_ALM!="53" && x.DESCR!=null && x.CVE_ALM!=details.warehouseId));
          this.warehouses=[...currentWarehouse,...warehouses];
        });
        this.isLoading=false;
        this.rol.setValue(this.currentRol);
        this.name.setValue(details.name);
        this.email.setValue(details.email);
        this.email.disable();
        this.folio.setValue(details.folio);
        this.folio.enable();
        this.jobDescription.setValue(details.jobDescription);
        this.claveSAE.setValue(details.keySae);
        this.claveSAE.enable();
        this.warehouseId.setValue(details.warehouseId);
        this.warehouseId.enable();
      },(err)=>{
        this.isLoading=false;
        this.setMsg(err.error.msg,"ERROR")
      })
    }else{
      this.isLoading=true;
      this.addUserService.getSimpleUserDetails(this.currentId).subscribe((details)=>{
        this.isLoading=false;
        this.rol.setValue(this.currentRol);
        this.name.setValue(details.name);
        this.email.setValue(details.email);
        this.email.disable();
        this.jobDescription.setValue(details.jobDescription);
      },(err)=>{
        this.isLoading=false;
        this.setMsg(err.error.msg,"ERROR")
      })
    }
  }


  openDialogSellers() {
    const dialog = this.dialog.open(ListAllSellersComponent, {
      disableClose: true,
      data: {
        selected: this.sellersSelected.map(x => x.id),
        items: this.sellers.map((x, index) => ({ name: x.name, id: x.id, isSelected: false, key: index + 1 })),
        type: "sellers"
      }
    });
    dialog.afterClosed().subscribe((selected) => {
      if (selected) {
        console.log("Sellers: " + JSON.stringify(selected));
        this.allSellers = selected.all;
        if (!this.allSellers) {
          this.sellersSelected = selected.items;
        } else {
          this.sellersSelected = this.sellersAll.map((x, index) => ({
            id: x.id,
            isSelected: true,
            key: index + 1,
            name: x.name
          }));
        }
      }
    })
  }

  validForPreSaleUser():boolean{
    let flag:boolean=false;
    if(this.email.valid && this.folioPreSale.valid && this.name.valid && this.password.valid && this.passwordConfirm.valid && this.sellersSelected.length>0 && this.jobDescription.valid){
      flag=true;
    }
    if(flag){
      flag=this.checkPassword();
    }
    return flag;
  }

  validForPreSaleUserUpdate():boolean{
    let flag:boolean=false;
    if(this.folioPreSale.valid && this.name.valid && this.sellersSelected.length>0){
      flag=true;
    }
    if(flag && this.password.value!=null){
      flag=this.checkPassword();
    }
    return flag;
  }

  validForSimpleUser():boolean{
    let flag:boolean=false;
    if(this.email.valid && this.name.valid && this.jobDescription.valid && this.password.valid && this.passwordConfirm.valid){
      flag=true;
    }
    if(flag){
      flag=this.checkPassword();
    }
    return flag;
  }

  validForSimpleUserForUpdate():boolean{
    let flag:boolean=false;
    if(this.name.valid && this.jobDescription.valid ){
      flag=true;
    }
    if(flag && this.password.value!=null){
      flag=this.checkPassword();
    }
    return flag;
  }

  validForSellerOfSucursal(){
    let flag:boolean=false;
    if(this.email.valid && this.name.valid  && this.password.valid && this.passwordConfirm.valid && this.folio.valid && this.warehouseId.valid && this.claveSAE.valid){
      flag=true;
    }
    if(flag){
      flag=this.checkPassword();
    }
    return flag;
  }

  validForSellerOfSucursalForUpdate(){
    let flag:boolean=false;
    if( this.name.valid   && this.folio.valid && this.warehouseId.valid && this.claveSAE.valid){
      flag=true;
    }
    if(flag && this.password.value!=null){
      flag=this.checkPassword();
    }
    
    return flag;
  }

  checkPassword():boolean{
    let flag = true;
    if(this.password.value!=this.passwordConfirm.value){
      flag=false;
      this.passwordEquals=false;
    }else{
      this.passwordEquals=true;
    }
    return flag;
  }

  register(){
    if(!this.isLoading){
      if(this.rol.value=="PRESALE"){
        if(this.validForPreSaleUser()){
          this.isLoading=true;
          let preSaleUserRequest:UserPreSaleRegisterRequest = {
              email: this.email.value,
              folio: this.folioPreSale.value,
              name: this.name.value,
              password: this.password.value,
              jobDescription: this.jobDescription.value,
              rol: this.rol.value,
              sellers: this.sellersSelected.map(x=>x.id)
          };
          this.addUserService.registerPreSaleUser(preSaleUserRequest).subscribe(()=>{
            this.isLoading=false;
            this.clearForm();
            this.setMsg("Usuario registrado con exito","INFO");
          },(err)=>{
            this.isLoading=false;
            this.setMsg(err.error.msg,"ERROR");
          })
        }
      }else if(this.rols.includes(this.rol.value)){
        if(this.validForSellerOfSucursal()){
          this.isLoading=true;
          let userSellerRequest:UserSellerRegisterRequest = {
            email: this.email.value,
            folio: this.folio.value,
            keySae: this.claveSAE.value,
            name: this.name.value,
            password: this.password.value,
            jobDescription: this.jobDescription.value,
            rol: this.rol.value,
            warehouseId: this.warehouseId.value
          };
          this.addUserService.registerSellerUser(userSellerRequest).subscribe(()=>{
            this.isLoading=false;
            this.clearForm();
            this.setMsg("Usuario registrado con exito","INFO");
          },(err)=>{
            this.isLoading=false;
            this.setMsg(err.error.msg,"ERROR");
          });
        }
      }else{
        if(this.validForSimpleUser()){
          this.isLoading=true;
          let userRequest:UserRegisterRequest={
            email: this.email.value,
            name: this.name.value,
            password: this.password.value,
            rol: this.rol.value,
            jobDescription: this.jobDescription.value
          };
          this.addUserService.registerSimpleUser(userRequest).subscribe(()=>{
            this.isLoading=false;
            this.clearForm();
            this.setMsg("Usuario registrado con exito","INFO");
          },(err:any)=>{
            this.isLoading=false;
            this.setMsg(err.error.msg,"ERROR");
          })
        }
      }
    }
  }

  update(){
    if(!this.isLoading){
      if(this.rol.value=="PRESALE"){
        if(this.validForPreSaleUserUpdate()){
          this.isLoading=true;
          let preSaleUserRequest:UserPreSaleUpdateRequest = {
              folio: this.folioPreSale.value,
              name: this.name.value,
              password: this.password.value!=null?this.password.value:null,
              sellers: this.sellersSelected.map(x=>x.id),
              jobDescription: this.jobDescription.value
          };
          this.addUserService.updatePreSaleUser(this.currentId,preSaleUserRequest).subscribe(()=>{
            this.isLoading=false;
            this.updateCorrect=true;
            this.setMsg("Usuario actualizado con exito","INFO");
          },(err)=>{
            this.isLoading=false;
            
            this.setMsg(err.error.msg,"ERROR");
          })
        }
      }else if(this.rols.includes(this.rol.value)){
        if(this.validForSellerOfSucursalForUpdate()){
          this.isLoading=true;
          let userSellerRequest:UserSellerUpdateRequest = {
            folio: this.folio.value,
            keySae: this.claveSAE.value,
            name: this.name.value,
            password: this.password.value!=null?this.password.value:null,
            warehouseId: this.warehouseId.value,
            jobDescription: this.jobDescription.value
          };
          this.addUserService.updateSellerUser(this.currentId,userSellerRequest).subscribe(()=>{
            this.isLoading=false;
            this.updateCorrect=true;
            this.setMsg("Usuario actualizado con exito","INFO");
          },(err)=>{
            
            this.isLoading=false;
            this.setMsg(err.error.msg,"ERROR");
          });
        }
      }else{
        if(this.validForSimpleUserForUpdate()){
          this.isLoading=true;
          let userRequest:SimpleUserUpdateRequest={
            name: this.name.value,
            password: this.password.value!=null?this.password.value:null,
            jobDescription: this.jobDescription.value
          };
          this.addUserService.updateSimpleUser(this.currentId,userRequest).subscribe(()=>{
            this.isLoading=false;
            this.updateCorrect=true;
            this.setMsg("Usuario actualizado con exito","INFO");
            
          },(err:any)=>{
            this.isLoading=false;
            this.setMsg(err.error.msg,"ERROR");
          })
        }
      }
    }
  }

  setMsg(msg:string,type:string){
    this.msgService=msg;
    if(type=="INFO"){
      this.showMsgError=false;
      this.showMsg=true;
    }else{
      this.showMsgError=true;
      this.showMsg=false;
    }
  }

  clearForm() {
      this.form.reset();
  }
  backToList(){
    this.router.navigateByUrl("/users/list");
  }
}
