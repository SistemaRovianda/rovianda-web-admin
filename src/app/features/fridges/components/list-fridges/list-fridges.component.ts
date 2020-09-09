import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-fridges',
  templateUrl: './list-fridges.component.html',
  styleUrls: ['./list-fridges.component.scss']
})
export class ListFridgesComponent implements OnInit {
 private _source:any;
@Input() set source(val:any){
  this._source=val;
  this.assignedData(this._source)
}

@Output() deleteItem= new EventEmitter;
  displayedColumns:string[]=['number','temp', 'accions']
  dataSource:any;

  constructor() { }

  ngOnInit() {
  }

  assignedData(data){
    this.dataSource=data;
  }

  DeleteItem(event){
    this.deleteItem.emit(event);
  }

}
