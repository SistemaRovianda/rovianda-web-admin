import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { catchError } from 'rxjs/operators';
import { SellerService } from 'src/app/features/services/seller.service';

@Component({
  selector: 'app-modal-change-password',
  templateUrl: './modal-change-password.component.html',
  styleUrls: ['./modal-change-password.component.scss']
})
export class ModalChangePasswordComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{uid:string},private dialogRef:MatDialogRef<ModalChangePasswordComponent>,private sellerService:SellerService) { 

  }

  form:FormGroup;
  isLoading:boolean=false;
  get password(){
    return this.form.get("password");
  }
  ngOnInit() {
    this.form = new FormGroup(
      {
        password: new FormControl(null,Validators.required)
      }
    );
  }

  updatePassword(){
    if(this.form.valid){
      this.isLoading=true;
      this.sellerService.updatePassword(this.data.uid,this.password.value).subscribe(()=>{
        this.isLoading=false;
        this.closeModal();
      },()=>{this.isLoading=false;})
    }
  }

  closeModal(){
    this.dialogRef.close();
  }

}
