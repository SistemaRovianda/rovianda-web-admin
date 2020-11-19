import { Component, OnInit } from "@angular/core";
import { MatTabContent, MatTableDataSource } from '@angular/material';
import { devices } from 'src/app/features/models/model-machines';
import { MaintenanceService } from "src/app/features/services/maintenance.service";

@Component({
  selector: "app-machine",
  templateUrl: "./machine.component.html",
  styleUrls: ["./machine.component.scss"],
})
export class MachineComponent implements OnInit {
  displayedColumns: string[]=["number","devices","store","cost","date"];
  dataSource=new MatTableDataSource();
  device: string[]=[];
  store: string[]=[];
  rows: any= [];

  constructor(private serviceMaintenance: MaintenanceService) {}

  ngOnInit() {
    // this.getStores();
  }

  // getStores() {
  //   this.serviceMaintenance.getAllStores().subscribe((data) => {
  //     console.log(data);
  //   });
  // }

  // objcolumns(data) {
  //   let arr: any = [];
  //   let names=[];
  //   for (let obj of data)
  //     for (let item of obj.devices)
  //       arr.push(item);
  
  //   names.push("Tiendas")
  //   for (let devices of arr)
  //     names.push(devices.name);

  //   names = names.filter((v,i) => names.indexOf(v) === i);
  //     this.displayedColumns = names;
  //     this.Products(arr);
  // }

  // Products(arr:any){
  //   let contentPrices:any=[];
  //   console.log("values: ",arr)
  //   for(let item of arr){
  //     let name= item.name;
  //     // contentPrices.push({`${this.name}`:`${item.costMaintenance}`});
  //     // contentPrices[item.name]=item.costMaintenance;
  //     console.log("v: ",JSON.parse(JSON.stringify(contentPrices)));
  //   }
  // }

  objDates(event) {
    let obj: any = {
      dateInit: event.dateInit,
      dateEnd: event.dateEnd,
    };
    // this.displayedColumns= [];
    this.serviceMaintenance.postStoreDevices(obj).subscribe((data) => {
      // this.objcolumns(data);
      this.rows=[];
      this.Stores(data);
    },err=>{ console.log("ocurrio un error")});
  }

  Stores(data: any){
    
    let objComplete:devices;
    // console.log("entro :v")
      for (let obj of data){
        // console.log("obj: ", obj.store);
        for (let item of obj.devices){
          objComplete= {
            store:obj.store,
            device: item.name,
            cost: item.costMaintenance,
            date: item.date
          }
          this.rows.push(objComplete);
        }
      }
      this.separator(this.rows)
      this.dataSource = this.rows;
  }

  separator(data: any){
    for(let v of data){
      this.store.push(v.store);
      this.device.push(v.device);
    }
    console.log(this.store);
    this.store= this.store.filter((v,i) => this.store.indexOf(v) === i);
    console.log(this.store);
    this.device= this.device.filter((v,i) => this.device.indexOf(v) === i);
  }

  filterData(data){
      console.log(data);
      let arr:any=[];
      let newRows:any=[];
      // let cloneRows:any=new Array(this.rows);
      for(let item of data){
        arr.push(item.value);
      }
        for(let item of this.rows){
          for(let i of arr){
            if(item.store === i || item.device=== i){
              newRows.push(item);
            }
          }
        }
        newRows= [...new Set(newRows)];

        if(data.length){
          this.dataSource= new MatTableDataSource(newRows);    
        }else{
          this.dataSource= new MatTableDataSource(this.rows);    

        }
  }
}
