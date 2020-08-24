import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from 'src/app/features/services/maintenance.service';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {


  displayedColumns: string[] = ['store', '', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;

  constructor(
    private serviceMaintenance: MaintenanceService
  ) { }

  ngOnInit() {
    this.getStores()
  }

  getStores(){
    this.serviceMaintenance.getAllStores().subscribe((data)=>{
      console.log(data)
    })
  }

  objDates(event){
    
  }

}
