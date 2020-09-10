import { Component, OnInit, Input } from "@angular/core";
import { Maintenance } from "src/app/features/shared/models/maintenance.model";

@Component({
  selector: "maintenance-detail",
  templateUrl: "./maintenance-detail.component.html",
  styleUrls: ["./maintenance-detail.component.scss"],
})
export class MaintenanceDetailComponent implements OnInit {
  @Input() detail: Maintenance;

  constructor() {}

  ngOnInit() {}
}
