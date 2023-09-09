import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-list-all-sellers',
  templateUrl: './list-all-sellers.component.html',
  styleUrls: ['./list-all-sellers.component.scss']
})
export class ListAllSellersComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{selected:string[],type:string,items:{name:string,id:string,isSelected:boolean,key:string}[]},
  private matDialogRef:MatDialogRef<ListAllSellersComponent>) { }

  isLoading:boolean=false;
  clientsList:{name:string,id:string,isSelected:boolean,key:string}[]=[];
  clientsListTemp:{name:string,id:string,isSelected:boolean,key:string}[]=[];
  form:FormGroup;
  isFiltered:boolean=false;
  isSelectedAll:boolean=false;
  typeFilter:string="";
  ngOnInit(): void {
    this.form=new FormGroup({
      hint: new FormControl(null,Validators.required)
    });
    if(this.data.type=="sellers"){
      this.typeFilter="Vendedores";
      this.clientsList=this.data.items;
      this.clientsListTemp=this.data.items;
      if(this.clientsList.length==this.data.selected.length){
        this.isSelectedAll=true;
      }
      for(let client of this.clientsList){
          if(this.data.selected.includes(client.id)){
            client.isSelected=true;
          }
      }
    }
  }

  search(){
    if(this.form.valid){
        this.isFiltered=true;
        let value=this.form.get("hint").value;
        this.clientsListTemp=this.clientsList.filter(x=>x.name.toLowerCase().includes(value.toLowerCase()) || x.key.toString().includes(value));
    }
  }
  cancelSearch(){
    this.isFiltered=false;
    this.clientsListTemp=this.clientsList;
  }

  select(index:number){
    this.clientsListTemp[index].isSelected=true;
    let id = this.clientsListTemp[index].id;
    for(let client of this.clientsList){
      if(client.id==id){
        client.isSelected=true;
      }
    }
  }
  removeSelect(index:number){
    this.clientsListTemp[index].isSelected=false;
    this.isSelectedAll=false;
    let id = this.clientsListTemp[index].id;
    for(let client of this.clientsList){
      if(client.id==id){
        client.isSelected=false;
      }
    }
  }
  cancel(){
    this.matDialogRef.close({items:this.clientsList.length?this.clientsList.filter(x=>x.isSelected):[],all:this.isSelectedAll});
  }

  accept(){
    this.matDialogRef.close({items:this.clientsList.length?this.clientsList.filter(x=>x.isSelected):[],all:this.isSelectedAll});
  }
  all(){
    this.clientsList=this.clientsList.map(x=>({...x,isSelected:true}))
    this.clientsListTemp=this.clientsListTemp.map(x=>({...x,isSelected:true}))
    this.isSelectedAll=true;
  }
  deselectAll(){
    this.clientsList=this.clientsList.map(x=>({...x,isSelected:false}))
    this.clientsListTemp=this.clientsListTemp.map(x=>({...x,isSelected:false}))
    this.isSelectedAll=false;
  }

}
