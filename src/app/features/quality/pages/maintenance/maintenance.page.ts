import { Component, OnInit } from "@angular/core";
import { MaintenanceService } from 'src/app/features/services/maintenance.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-maintenance",
  templateUrl: "./maintenance.page.html",
  styleUrls: ["./maintenance.page.scss"]
})
export class MaintenancePageComponent implements OnInit {
  entity$ 
  // = [
  //   { date: "12/02/2019", titleFailure: "prueba" },
  //   { date: "12/02/2019", titleFailure: "prueba" },
  //   { date: "12/02/2019", titleFailure: "prueba" },
  //   { date: "12/02/2019", titleFailure: "prueba" },
  //   { date: "12/02/2019", titleFailure: "prueba" }
  // ];

  detail$ 
  // = {
  //   image: "",
  //   title: "Titulo de la falla",
  //   name: "Sergio Rosas Quintero",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, deserunt rem. Quos dolorem rerum ullam vero cumque eos fuga aliquam nam enim sequi voluptas amet recusandae, omnis facere sapiente a."
  // };

 constructor(
    private serviceMaintenance: MaintenanceService
  ) {
     
  }

  async ngOnInit() {
    await this.serviceMaintenance.getMaintenance().subscribe((data)=>{
      this.entity$=data;
      console.log(data)
    })
  }

  details(maintenanceId: number){
    this.detail$= this.entity$.find( data => data.maintenanceId == maintenanceId);
    console.log(this.detail$);
  }
}
