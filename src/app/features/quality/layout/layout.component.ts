import { Component, OnInit } from "@angular/core";
// import { SessionStorageService } from '../../services/session-storage-service'
import { Router } from '@angular/router';
@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  constructor( private route:Router) {}

  ngOnInit() {}

  logout(){
    console.log('test')
          // localStorage.setItem('user', null);
          localStorage.clear()
    // this.sessionService.clear();
    this.route.navigate(['/'])
  }
}
