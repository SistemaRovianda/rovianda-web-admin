import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Maintenance } from "src/app/features/shared/models/maintenance.model";

@Component({
  selector: "records",
  templateUrl: "./records.component.html",
  styleUrls: ["./records.component.scss"],
})
export class RecordsComponent implements OnInit {
  @Input() entity;
  @Output() maintenance = new EventEmitter<Maintenance>();
  constructor() {}

  ngOnInit() {}

  sendData(event) {
    this.maintenance.emit(event);
  }
}
