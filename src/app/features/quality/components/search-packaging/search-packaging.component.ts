import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-packaging',
  templateUrl: './search-packaging.component.html',
  styleUrls: ['./search-packaging.component.scss']
})
export class SearchPackagingComponent implements OnInit {

  private _packaging:any;
  @Input() public set packaging(data:any){
    this._packaging=data;
    if(this._packaging)
    this.assignedData(this._packaging.outputs)
  }

  displayedColumns: string[] = ['number', 'name','quantity', 'date'];
  dataSource:any;
  constructor() { }

  ngOnInit() {
  }

  assignedData(events:any){
    this.dataSource = events;
  }

}
