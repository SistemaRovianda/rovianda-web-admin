import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServicesClientsService } from 'src/app/features/services/services-clients.service';

@Component({
  selector: 'app-ticket-modal',
  templateUrl: './ticket-modal.component.html',
  styleUrls: ['./ticket-modal.component.scss']
})
export class TicketModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{saleId:number,folio:string},
  private dialogRef:MatDialogRef<TicketModalComponent>,
  private servicesClientsService:ServicesClientsService) { }

  ticket ="";
  ngOnInit() {
    this.servicesClientsService.getTicket(this.data.saleId).subscribe((response)=>{
      console.log("Ticket recibido: "+response);
      this.ticket = response;
    });  
  }

  close(){
    this.dialogRef.close();
  }

}
