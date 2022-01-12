import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { WarehouseService } from 'src/app/features/services/warehouse.service';

@Component({
  selector: 'app-modal-confirm-delete',
  templateUrl: './modal-confirm-delete.component.html',
  styleUrls: ['./modal-confirm-delete.component.scss']
})
export class ModalConfirmDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{productName:string,id:number},
  private matDialogRef: MatDialogRef<ModalConfirmDeleteComponent>,
  private roviandaApiService: WarehouseService) { }
  isLoading:boolean=false;
  ngOnInit() {
  }

  cancel(){
    this.matDialogRef.close();
  }
  delete(){
    if(!this.isLoading){
      this.isLoading=true;
      this.roviandaApiService.deletePreregisterProduct(this.data.id).subscribe(()=>{
        this.isLoading=false;
        this.cancel();
      },(err)=>{
        this.isLoading=false;
      })
    }
  }

}
