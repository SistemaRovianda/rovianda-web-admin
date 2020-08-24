import { Component, OnInit } from '@angular/core';
import { ServicesProductsService } from 'src/app/features/services/services-products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  dataDetailsProduct:any;

  constructor(
    private serviceProduct:ServicesProductsService,
    private router: Router,
      ) { }


  ngOnInit() {
  }

  detailsProduct(id:number){
    this.serviceProduct.getDetailsProduct(id).subscribe((data)=>{
      this.dataDetailsProduct=data;
    })
  }

  navigateCreateProduct(){
    this.router.navigate(['products','create-product']);
  }

}
