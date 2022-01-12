import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { role } from "../../../shared/models/role.interface";
import { ToastrService } from 'ngx-toastr';
import { AddUserService } from "src/app/features/services/add-user.service";
import { catchError } from "rxjs/operators";

@Component({
  selector: "app-add-user-page",
  templateUrl: "./add-user-page.component.html",
  styleUrls: ["./add-user-page.component.scss"],
})
export class AddUserPageComponent implements OnInit {

  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toast: ToastrService,
    private addUserService:AddUserService
  ) {
    this.userForm = this.fb.group({
      name: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
      rolId: ["", [Validators.required]],
      job: ["", [Validators.required]],
      clave: [""],
      comision: [{ value: '', disabled: true }],
      warehouse:[{value:null,disabled:true}],
      folio: [{value:'',disabled: true}]
    });

  }
  loading;
  userId = 0;
  warehouses:any[]=[];
  roles: role[] = [
    { name: "Recepción", rolId: 1 },
    { name: "Almacén", rolId: 2 },
    { name: "Formulación", rolId: 3 },
    { name: "Congelamiento", rolId: 4 },
    { name: "Proceso", rolId: 5 },
    { name: "Hornos", rolId: 6 },
    { name: "Empaquetado", rolId: 7 },
    { name: "Calidad", rolId: 8 },
    { name: "Mantenimiento", rolId: 9 },
    { name: "Vendedor", rolId: 10 },
    { name: "Ventas", rolId: 10 },
    { name: "Administrador", rolId: 11 },
    { name: "Linea de quesos", rolId: 12 },
    { name: "Tiendas tradicionales (sucursal)", rolId: 13 },
    { name: "Tiendas plus (sucursal)", rolId: 14 },
    { name: "Supermercados", rolId: 15 },
  ];
  private isLoading:boolean=false;
  ngOnInit(): void {
    this.addUserService.getAllWarehouses().subscribe((warehouses)=>{
      warehouses=warehouses.filter(x=>(x.ENCARGADO==null || !((x.ENCARGADO as string).includes("ASSIGNED") || x.CVE_ALM==53)));
      this.warehouses=warehouses;
    });
  }

  get name() {
    return this.userForm.get("name");
  }

  get firstName() {
    return this.userForm.get("firstName");
  }

  get lastName() {
    return this.userForm.get("lastName");
  }

  get email() {
    return this.userForm.get("email");
  }

  get password() {
    return this.userForm.get("password");
  }

  get rolId() {
    return this.userForm.get("rolId");
  }

  get job() {
    return this.userForm.get("job");
  }

  get clave() {
    return this.userForm.get("clave");
  }

  get comision() {
    return this.userForm.get("comision");
  }

  get warehouse(){
   return this.userForm.get("warehouse");
  }

  get folio(){
    return this.userForm.get("folio");
  }

  rols:number[] =[10,13,14,15];
  checkTypeSeller() {
    if (this.rols.includes(+this.rolId.value)) {
      this.toast.info("Comunicando con la nube", "Obteniendo identificador de vendedor");
      this.addUserService.getIdSeller().subscribe(({count})=>{
        count++;
        this.clave.setValue(+count);
      })
      this.comision.enable();
      this.warehouse.enable()
      this.folio.enable();
    } else {
      this.folio.disable();
      this.comision.disable();
    }
  }

  createUser() {
    
    if (!this.rols.includes(+this.rolId.value)) {
      this.registerUser();
    } else {
      this.registerSeller();
    }
  }

  registerSeller() {
    if(this.warehouse.value==null){
      this.toast.error("Es necesario agregar almacen para el vendedor")
    }else
    if (this.comision.value === "") {
      this.toast.error("Es necesario agregar comision")
    } else {
      const { ...values } = this.userForm.value;
      this.isLoading=true;
      
      this.addUserService.addSeller({...values}).subscribe(()=>{
        this.isLoading=false;
        this.userForm.reset();
        this.toast.success("Usuario registrado", "Proceso completado");
      },(err)=>{
        this.toast.error(`Error al registrar el usuario`, "Error");
        this.isLoading=false;
      })
      
    }
  }

  registerUser() {
    const { ...values } = this.userForm.value;
    this.isLoading=true;
    this.addUserService.addUser({...values,clave:this.clave.value}).subscribe(()=>{
      this.isLoading=false;
      this.userForm.reset();
      this.toast.success("Usuario registrado", "Proceso completado");
    },(err)=>{
      this.isLoading=false;
      this.toast.error(`Error al registrar el usuario`, "Error");});
  }

  clearForm(result) {
    if (result) {
      this.userForm.reset();
    }
  }
}
