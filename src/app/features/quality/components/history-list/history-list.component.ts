import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "history-list",
  templateUrl: "./history-list.component.html",
  styleUrls: ["./history-list.component.scss"]
})
export class HistoryListComponent implements OnInit {
  private _meat:any=null;

  displayedColumns:string[]=['Number', '']

  @Input() public set meat(val: any){
    this._meat=val;
    console.log(this._meat);
    this.receiver()
  }

  constructor() {}

  ngOnInit() {}

  receiver(){
    console.log(this._meat)
  }
}
