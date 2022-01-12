import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PlantService } from 'src/app/features/services/plant.service';

@Component({
  selector: 'app-cancel-request-modal',
  templateUrl: './cancel-request-modal.component.html',
  styleUrls: ['./cancel-request-modal.component.scss']
})
export class CancelRequestModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{saleId:number,requestStatus:string},private roviandaApiService:PlantService,
  private matDialogRef:MatDialogRef<CancelRequestModalComponent>) { }
  ticket:string="";
  isLoading:boolean=false;
  ngOnInit() {
      this.isLoading=true;
      this.roviandaApiService.getTicket(this.data.saleId).subscribe((ticket)=>{
        this.ticket=ticket as string;
        this.isLoading=false;
      },()=>{
        this.isLoading=false;
      });
  }

  close(){
    this.matDialogRef.close();
  }


  acceptCancelation(saleId:number){
    if(!this.isLoading){
      this.isLoading=true;
      this.roviandaApiService.updateStatusCancelationRequest(saleId,"ACCEPTED",localStorage.getItem("user")).subscribe(()=>{
        this.isLoading=false;
        this.close();
      },()=>{
        this.isLoading=false;
      });
    }
  }
  declineCancelation(saleId:number){
    this.roviandaApiService.updateStatusCancelationRequest(saleId,"DECLINED",localStorage.getItem("user")).subscribe(()=>{
      this.isLoading=false;
      this.close();
    },()=>{
      this.isLoading=false;
    })
  }

}
