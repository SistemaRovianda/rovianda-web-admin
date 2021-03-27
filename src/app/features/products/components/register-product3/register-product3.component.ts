import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { presentations } from 'src/app/features/models/model-products';
import { MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-product3',
  templateUrl: './register-product3.component.html',
  styleUrls: ['./register-product3.component.scss']
})
export class RegisterProduct3Component implements OnInit  {

  private _item;

  public get ELEMENT_DATA(): any {
    return this._item;
  }

  @Input() public set ELEMENT_DATA(val: any) {
    this._item=val;
    this.reload();
  }
  @Output() updatePresentation= new EventEmitter();

  displayedColumns: string[] = ['presentation', 'typePresentation', 'pricePresentation', 'accions']
  dataSource: MatTableDataSource<any>
  constructor(
  ) {
    this.dataSource= new MatTableDataSource();
   }
  ngOnInit(): void {
    
  }

  reload(){
    this.dataSource.data = this._item.map(x=>({isEditing:false,keyTemp:x.keySae,typePresentationTemp:x.typePresentation,priceTemp:x.pricePresentationPublic,...x}));
    this.updatePresentation.emit(this.ELEMENT_DATA);
  }

  delete(index:number){
    console.log(this.ELEMENT_DATA[index]);
    this.ELEMENT_DATA.splice(index, 1);   
    this.reload();
    this.updatePresentation.emit(this.ELEMENT_DATA);
  }
  edit(index:number){
    this.dataSource.data[index].isEditing=true;
  }

  presentationEdit:FormControl;
  saveEdit(index:number){
    let items = this.dataSource.data;
    
    if(items[index].typePresentation!=items[index].typePresentationTemp){
      items[index].typePresentation=items[index].typePresentationTemp;
    }
    if(+items[index].priceTemp!=items[index].pricePresentationPublic){
      items[index].pricePresentationPublic=+items[index].priceTemp;
    }
    items[index].isEditing=false;
    this.dataSource.data=[];
    this.dataSource.data=[...items];
  }

}
