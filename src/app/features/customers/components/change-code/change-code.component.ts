import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { PlantService } from 'src/app/features/services/plant.service';

@Component({
  selector: 'app-change-code',
  templateUrl: './change-code.component.html',
  styleUrls: ['./change-code.component.scss']
})
export class ChangeCodeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {client:any},private dialogRef:MatDialogRef<ChangeCodeComponent>,
  private roviandaApi:PlantService,
  private _snackBar: MatSnackBar) { 
    this.oldCode=this.data.client.key_sae_new;
  }
  isLoading:boolean=false;
  form:FormGroup;
  oldCode:string="";
  ngOnInit() {
    this.form=new FormGroup({
      newCode: new FormControl(null,[Validators.required])
    });
  }

  get newCode(){
    return this.form.get("newCode");
  }

  changeCode(){
    if(!this.isLoading && this.form.valid){
      this.isLoading=true;
      this.roviandaApi.updateCodeClient(this.data.client.clients_client_id,this.newCode.value).subscribe(()=>{
        this.isLoading=false;
        this.oldCode=this.newCode.value;
        this.form.reset();
        this._snackBar.open("Actualización exitosa","", {
          duration:  3000
        });
      },()=>{
        this.isLoading=false;
      });

    }
  }

  close(){
    this.dialogRef.close();
  }

}
