import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "records",
  templateUrl: "./records.component.html",
  styleUrls: ["./records.component.scss"]
})
export class RecordsComponent implements OnInit {
  @Input() entity;
  @Output() maintenance=new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  sendData(event){
    this.maintenance.emit(event.maintenanceId);
  }
}
