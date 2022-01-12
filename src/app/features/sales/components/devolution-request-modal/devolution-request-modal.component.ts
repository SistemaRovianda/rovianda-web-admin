import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductDevolution, RequestDevolution, SaleRequest } from 'src/app/features/models/models-sales-request';
import { PlantService } from 'src/app/features/services/plant.service';

@Component({
  selector: 'app-devolution-request-modal',
  templateUrl: './devolution-request-modal.component.html',
  styleUrls: ['./devolution-request-modal.component.scss']
})
export class DevolutionRequestModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{saleId:number},private roviandaApi:PlantService,private dialog:MatDialogRef<DevolutionRequestModalComponent>) { }
  isLoading:boolean = false;
  devolutionRequest:RequestDevolution;
  ngOnInit() {  
      this.isLoading=true;
      this.roviandaApi.getDevolutionRequestDetails(this.data.saleId).subscribe((devolutionReuest)=>{
        this.isLoading=false;
        this.devolutionRequest=devolutionReuest;
      },()=>{
        this.isLoading=false;
      });
  }

  parseDateWithHour(date:string){
    let dateSplited = date.split("T");
    let dateStr = dateSplited[0];
    let hoursSplited=  dateSplited[1].split(":");
    let meridian = "AM";
    if(+hoursSplited[0]>=12) meridian="PM";
    return dateStr+" "+hoursSplited[0]+":"+hoursSplited[1] +  " "+meridian;
  }

  close(){
    this.dialog.close();
  }

  acceptDevolution(sale:SaleRequest){
    if(!this.isLoading){
      this.isLoading=true;
      this.roviandaApi.updateStatusDevolutionRequest(sale.saleId,"ACCEPTED",localStorage.getItem("user")).subscribe(()=>{
        this.isLoading=false;
        this.close();
      },(err)=>{
        this.isLoading=false;
      });
    }
  }
  declineDevolution(sale:SaleRequest){
    if(!this.isLoading){
      this.isLoading=true;
      this.roviandaApi.updateStatusDevolutionRequest(sale.saleId,"DECLINED",localStorage.getItem("user")).subscribe(()=>{
        this.isLoading=false;
        this.close();
      },(err)=>{
        this.isLoading=false;
      });
    }
  }

}
