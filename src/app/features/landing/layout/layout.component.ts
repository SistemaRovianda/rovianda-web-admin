import { Component, OnInit } from "@angular/core";
import { Router, RouterEvent, RouterModule, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../services/auth.service';
@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  ban: boolean;
  ban2: boolean;
  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit() {}

  onSubmit(payload: any) {
    this.authService.signIn(payload.email,payload.password).subscribe((data)=>{
      this.authService.getUserData(data.uid).subscribe((dataUser)=>{
        console.log(dataUser)
        if(dataUser.rol == 'ADMINISTRATOR'){
          this.router.navigateByUrl("/warehouses/create");  ////products/list-products
        }else{
          this.ban2 = true;
        }
      },(err)=>{
        console.log('nada')
      })
    }, (err)=>{
      this.ban= true
    })

  }
}
