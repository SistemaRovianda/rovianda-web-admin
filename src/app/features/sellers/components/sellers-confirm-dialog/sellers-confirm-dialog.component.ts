import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Client } from 'src/app/features/models/models-seller';
import { SellerService } from 'src/app/features/services/seller.service';

@Component({
  selector: 'app-sellers-confirm-dialog',
  templateUrl: './sellers-confirm-dialog.component.html',
  styleUrls: ['./sellers-confirm-dialog.component.scss']
})
export class SellersConfirmDialogComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<SellersConfirmDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:{user:Client},private sellerService:SellerService) { }

  isLoading:boolean=false;
  ngOnInit() {
  }

  cancel(){
    this.dialogRef.close();
  }

  deleteUser(){
    console.log("Eliminando");
    this.isLoading=true;
    this.sellerService.deteleClient(this.data.user.id).subscribe(()=>{
      this.isLoading=false;
      this.dialogRef.close();
    },(err)=>this.isLoading=false);
  }

}
