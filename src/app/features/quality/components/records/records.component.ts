import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "records",
  templateUrl: "./records.component.html",
  styleUrls: ["./records.component.scss"]
})
export class RecordsComponent implements OnInit {
  @Input() entity;

  constructor() {}

  ngOnInit() {}
}
