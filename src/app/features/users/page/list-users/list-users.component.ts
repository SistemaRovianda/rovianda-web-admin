import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange, MatDialog, MatSelectChange, MatTableDataSource } from '@angular/material';
import { ItemUser, ItemUserEdit } from '../../../shared/models/list-users.interface';
import { PlantService } from '../../../services/plant.service';
import { FormControl } from '@angular/forms';
import { role } from 'src/app/features/shared/models/role.interface';
import { ModalChangePasswordComponent } from '../components/modal-change-password/modal-change-password.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  constructor(private plantService:PlantService,private matDialog:MatDialog,private router:Router) { 
    this.dataSource = new MatTableDataSource();
    this.filterRolFormControl=new FormControl(false);
  }

  filterRolFormControl:FormControl;
  get filterRol(){
    return this.filterRolFormControl;
  }

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
    {name:"Prevendedor",rolId:18},
    { name: "Administrador", rolId: 11 },
    { name: "Linea de quesos", rolId: 12 },
    { name: "Tiendas tradicionales (sucursal)", rolId: 13 },
    { name: "Tiendas plus (sucursal)", rolId: 14 },
    { name: "Supermercados", rolId: 15 },
  ];

  userSearch:string="";
  filtered:boolean=false;
  rolIdSelected:any;
  filterM(event:MatCheckboxChange){
    if(event.checked==false){
      this.cancelSearch();
    }
  }

  changeSelectionRol(event:MatSelectChange){
    console.log(event.value);
    this.rolIdSelected=event.value;
    this.dataSource.data = this.usersTemp;
    this.dataSource.data = this.dataSource.data.filter(x=>(
      x.rolId==event.value)
      );
  }
  search(){
    let users = this.dataSource.data.filter(x=>x.editing==true);
    if(!users.length && this.userSearch!=""){
      this.filtered=true;
      this.dataSource.data = this.dataSource.data.filter(x=>(
        x.fullName.toLowerCase().indexOf(this.userSearch.toLowerCase())!=-1 || x.email.toLowerCase().indexOf(this.userSearch.toLowerCase())!=-1)
        );
    }
  }
  usersTemp:ItemUserEdit[]=[];
  cancelSearch(){
    this.userSearch="";
    this.filtered=false;
    this.dataSource.data=this.usersTemp;
    if(this.filterRol.value){
      this.dataSource.data = this.dataSource.data.filter(x=>(
        x.rolId==this.rolIdSelected)
        );
    }
  }

  loadingTable:boolean=false;
  dataSource:MatTableDataSource<ItemUserEdit>;
  displayedColumns:string[]=["name","email","rol","status","options"];
  ngOnInit(): void {
      this.reloadTable();
    
  }

  reloadTable(){
    this.loadingTable=true;
    this.plantService.getAllUser().subscribe(users=>{
      users=users.filter(x=>x.status!="DELETED");
      this.dataSource.data=users.map(x=>{
        return {
          editing: false,
          email: x.email,
          fullName: x.fullName,
          fullNameTemp: x.fullName,
          job: x.job,
          rol: x.rol,
          userId: x.userId,
          status:x.status,
          updating:false,
          rolId: x.rolId
        }
      });
      this.usersTemp=this.dataSource.data;
      this.loadingTable=false;
    },(err)=>{
      this.loadingTable=false;
    })
  }

  edit(index:number){
    let item = this.dataSource.data[index];
    /*item.editing=true;*/
    this.router.navigateByUrl("/users/details/"+item.userId+"?type=EDIT&rol="+item.rol);
  }
  save(index:number){
    let item = this.dataSource.data[index];
    if(item.fullName!=item.fullNameTemp){
      item.updating=true;
      this.plantService.updateUserStatus(item.userId,"UPDATING",item.fullNameTemp).subscribe(()=>{
        item.updating=false;
        item.editing=false;
      },()=>{
        item.updating=false;
        item.editing=false;
      });
    }
  }

  del(index:number){
    console.log("Deleted");
    let item = this.dataSource.data[index];
    item.updating=true;
    this.plantService.updateUserStatus(item.userId,"DELETED",null).subscribe(()=>{
      item.updating=false;
      this.reloadTable();
      
    },()=>{
      item.updating=false;
      this.reloadTable();
    });
  }

  cancel(index:number){
    let item = this.dataSource.data[index];
    item.fullNameTemp=item.fullName;
    item.editing=false;
  }

  changeStatus(index:number){
    let item = this.dataSource.data[index];
    item.updating=true;
    item.status=="ACTIVE"?item.status="INACTIVE":item.status="ACTIVE";
    this.plantService.updateUserStatus(item.userId,item.status,null).subscribe(()=>{
      item.updating=false;
    },()=>{
      item.updating=false;
    });
  }

  changePasswordModal(index:number){
    let item = this.dataSource.data[index];
    this.matDialog.open(ModalChangePasswordComponent,{
      width: "300px",
      disableClose:true,
      data:{uid:item.userId}
    });
  }

}
