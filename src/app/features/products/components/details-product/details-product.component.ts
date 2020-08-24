import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {

  @Input() dataDetails:any;
  constructor(
  ) {}

  ngOnInit() {

  }
  
}
