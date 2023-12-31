import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MaintenanceService } from "src/app/features/services/maintenance.service";
import { Maintenance } from "src/app/features/shared/models/maintenance.model";

@Component({
  selector: "app-maintenance",
  templateUrl: "./maintenance.page.html",
  styleUrls: ["./maintenance.page.scss"],
})
export class MaintenancePageComponent implements OnInit {
  entity$: BehaviorSubject<Maintenance[]> = new BehaviorSubject([]);

  detail$: Maintenance;

  constructor(private serviceMaintenance: MaintenanceService) {}

  async ngOnInit() {
    await this.serviceMaintenance.getMaintenance().subscribe((data: any) => {
      this.entity$.next(data);
      console.log(data);
    });
  }

  details(values: Maintenance) {
    const payload = {
      urlDefault: `url(${values.image})`,
      ...values,
    };

    this.detail$ = payload;
  }
}
