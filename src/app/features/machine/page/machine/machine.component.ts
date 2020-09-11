import { Component, OnInit } from "@angular/core";
import { MaintenanceService } from "src/app/features/services/maintenance.service";

@Component({
  selector: "app-machine",
  templateUrl: "./machine.component.html",
  styleUrls: ["./machine.component.scss"],
})
export class MachineComponent implements OnInit {
  displayedColumns: string[] = ["store"];
  dataSource: any;

  constructor(private serviceMaintenance: MaintenanceService) {}

  ngOnInit() {
    this.getStores();
  }

  getStores() {
    this.serviceMaintenance.getAllStores().subscribe((data) => {
      console.log(data);
    });
  }

  objcolumns(data) {
    let arr: any = [];
    for (let obj of data) {
      for (let item of obj.devices) {
        arr.push(item);
      }
    }
    for (let devices of arr) {
      this.displayedColumns.push(devices.name);
    }
    console.log("arrFinal: ", this.displayedColumns);
  }

  objDates(event) {
    console.log(event);
    let obj: any = {
      dateInit: event.dateInit,
      dateEnd: event.dateEnd,
    };

    console.log(obj);

    this.serviceMaintenance.postStoreDevices(obj).subscribe((data) => {
      console.log(data);
      this.objcolumns(data);
    });
  }
}
