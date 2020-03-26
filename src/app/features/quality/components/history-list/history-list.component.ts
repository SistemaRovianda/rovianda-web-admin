import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "history-list",
  templateUrl: "./history-list.component.html",
  styleUrls: ["./history-list.component.scss"]
})
export class HistoryListComponent implements OnInit {
  @Input() entity;

  constructor() {}

  ngOnInit() {}
}
