import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { WarehouseService } from 'src/app/features/services/warehouse.service';

@Component({
  selector: 'app-add-warehouse-component',
  templateUrl: './add-warehouse-component.component.html',
  styleUrls: ['./add-warehouse-component.component.scss']
})
export class AddWarehouseComponentComponent implements OnInit {
  form:FormGroup;
  constructor(private warehouseService:WarehouseService) {
    this.form = new FormGroup({
      description: new FormControl(null,[Validators.required])
    });
   }
  isLoading:boolean=false;
  ngOnInit() {
  }

  @Output() reloadingList =new  EventEmitter();

  submit(){
    if(this.form.valid){
      this.isLoading=true;
      this.warehouseService.registerWarehouse(this.form.get('description').value).subscribe(()=>{
        this.isLoading=false;
        this.reloadingList.emit("reload");
      });
    }
  }

}
