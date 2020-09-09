import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//components
import { CreateFridgeComponent } from './create-fridge.component'
import { ListFridgesComponent } from '../../components/list-fridges/list-fridges.component';

// Angular material 
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CreateFridgeComponent,ListFridgesComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule
  ],
  entryComponents:[ListFridgesComponent]
})
export class CreateFridgeModule { }
