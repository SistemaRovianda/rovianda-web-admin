import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "maintenance-detail",
  templateUrl: "./maintenance-detail.component.html",
  styleUrls: ["./maintenance-detail.component.scss"]
})
export class MaintenanceDetailComponent implements OnInit {
  @Input() detail;
  constructor() {}

  ngOnInit() {}
}
