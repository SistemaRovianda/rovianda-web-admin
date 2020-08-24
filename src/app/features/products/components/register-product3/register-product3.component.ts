import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { presentations } from 'src/app/features/models/model-products';
import { MatTableDataSource } from '@angular/material';

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
  @Output() updatePresentation= new EventEmitter;

  displayedColumns: string[] = ['count','presentation', 'typePresentation', 'pricePresentation', 'accions']
  dataSource: MatTableDataSource<presentations>
  constructor(
  ) { }
  ngOnInit(): void {}

  reload(){
    this.dataSource= new MatTableDataSource(this._item);
    this.updatePresentation.emit(this.ELEMENT_DATA);
  }

  delete(index:number){
    this.ELEMENT_DATA.splice(index, 1);   
    this.reload();
    this.updatePresentation.emit(this.ELEMENT_DATA);
  }

}
