import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServicesProductsService } from 'src/app/features/services/services-products.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';
import { listIngredients } from 'src/app/features/models/model-products';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-register-product2',
  templateUrl: './register-product2.component.html',
  styleUrls: ['./register-product2.component.scss']
})
export class RegisterProduct2Component implements OnInit {
  private _item:any[]=[];
@Input() public set change(val:string){
    
      if(typeof(val) == 'object'){
        console.log("val: ",val)
        this.OptionsDrief(this._item);
        this.reload()
      }else if(val != undefined){
        this._item.push(val);
        console.log(this._item)
        this.ngOnInit();
        this.reload()
      }
    
}
@Input() change2:any;
  @Output() updateingredients= new EventEmitter<listIngredients[]>();
  options:any[];
  myControl = new FormControl(Validators.required);
  filteredOptions: Observable<string[]>;
  ingredients:listIngredients[]=[];
  constructor(
    private serviceProduct: ServicesProductsService
  ) { }

  displayedColumns: string[] = ['number', 'nameIngredient', 'mark', 'variant', 'presentation', 'accions'];
  dataSource: MatTableDataSource<listIngredients>;

  async ngOnInit() {

    await this.serviceProduct.getIngredientsDrief('DRIEF').subscribe((data:listIngredients[])=>{
        this.options=data;
    })
    
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => value? this._filter(value):[])
    )
  }

  reload(){
    this.dataSource= new MatTableDataSource(this._item);
  }

  displayFn(ingredient: listIngredients): string {
    return ingredient && ingredient.nameProduct ? `${ingredient.nameProduct} ${ingredient.mark} ${ingredient.variant} ${ingredient.presentation}` : '';
  }

  private _filter(value: any): string[] {
    let search:any;
    if(typeof(value) != 'object'){
      const filterValue = value.toLowerCase();
        if(this.options){
          search= this.options.filter(option=>{
            let name = `${option.nameProduct.toLowerCase()} ${option.mark.toLowerCase()} 
            ${option.variant.toLowerCase()} ${option.presentation.toLowerCase()}`
            return name.includes(filterValue)? option:''
          })
        }
    }else{
      let deleteitem:any= this.options;
    this.options=deleteitem.filter(data=>data.id != value.id)
    }
    return search;
  }

  OptionsDrief(filter:any){
    let deleteitem:any= this.options;
    for(let item of filter){
      console.log("ITEM: "+item);
      this.options=deleteitem.filter(data=>data.id != item.id)
    }
  }

  print(){
   this._item.push(this.myControl.value);
   this.myControl.setValue('');
   this.reload()
   this.updateingredients.emit(this._item);
  }

  delete(ingredient:any){
    let deleteitem:any= this._item;
    this._item=deleteitem.filter(data=>data.id != ingredient.id)
    this.options.push(ingredient)
    this.reload()
    this.updateingredients.emit(this._item);
  }
}
