import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-drief',
  templateUrl: './search-drief.component.html',
  styleUrls: ['./search-drief.component.scss']
})
export class SearchDriefComponent implements OnInit {

  private dataDrief:any;
  @Input() public set drief(data:any){
    console.log(data)
    this.dataDrief=data;
    if(this.dataDrief)
    this.assignedData(this.dataDrief.outputs)
  }

  displayedColumns: string[] = ['number', 'date', 'product', 'lot', 'observations'];
  dataSource:any;
  constructor() { }

  ngOnInit() {
  }

  assignedData(events:any){
    console.log(events);
    this.dataSource = events;
  }

}
