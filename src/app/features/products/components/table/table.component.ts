import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesProductsService } from 'src/app/features/services/services-products.service';
import { listProduct } from 'src/app/features/models/model-products';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
// import { SessionStorageService } from 'src/app/features/services/session-storage-service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Output() identificator= new EventEmitter<number>();
  displayedColumns: string[] = ['code', 'productName', 'accions'];
  infoIngredients: MatTableDataSource<listProduct>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private serviceProduct:ServicesProductsService,
    public dialog: MatDialog,
    // private serviceAuth:SessionStorageService
  ) {}

  ngOnInit() {
    this.serviceProduct.getProductsRovianda().subscribe((data: listProduct[])=>{
      this.infoIngredients = new MatTableDataSource(data);
      this.infoIngredients.paginator= this.paginator;
      this.paginator.pageSize
    })
  }

  funtionDetail(id:number){
    // this.serviceAuth.clear();
          // localStorage.setItem('user', null);
    this.identificator.emit(id);
    // this.serviceAuth.get('uid')
  }

  openDialog(data) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data=data;

    this.dialog.open(DialogComponent, dialogConfig);
  }

  funtionDelete(id:number,code:number){
    this.serviceProduct.deleteProduct(id).subscribe((data)=>{
      this.ngOnInit();
      this.openDialog(
        {title:'Eliminado', msg:`Se elimino el producto con clave: ${code}`}
      ); 
    }, (err)=>{
      this.ngOnInit();
      this.openDialog(
        {title:'Error',msg:`Ha ocurrido un error al intentar eliminar el producto con la clave: ${code}`}
      );
    })
  }

}
