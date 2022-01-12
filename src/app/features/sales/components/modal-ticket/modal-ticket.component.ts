import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PlantService } from 'src/app/features/services/plant.service';

@Component({
  selector: 'app-modal-ticket',
  templateUrl: './modal-ticket.component.html',
  styleUrls: ['./modal-ticket.component.scss']
})
export class ModalTicketComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,private roviandaApiService:PlantService,
  private matDialogRef:MatDialogRef<ModalTicketComponent>) { }
  ticket:string="";
  ngOnInit() {
    if(this.data.sale.devolutionRequest){
      this.roviandaApiService.getDevolutionTicket(this.data.sale.saleId).subscribe((ticket)=>{
        this.ticket=ticket as string;
      },()=>{

      });
    }else{
      this.roviandaApiService.getTicket(this.data.sale.saleId).subscribe((ticket)=>{
        this.ticket=ticket as string;
      },()=>{
        
      });
    }
  }

  close(){
    this.matDialogRef.close();
  }

}
