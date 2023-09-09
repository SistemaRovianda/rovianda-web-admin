import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users.component';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LayoutComponent } from 'src/app/features/quality/layout/layout.component';
import { LayoutModule } from 'src/app/features/quality/layout/layout.module';
import { AddUserPageComponent } from '../add-user-page/add-user-page.component';
import { AddUserPageModule } from '../add-user-page/add-user-page.module';
import {MatSelectModule} from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalChangePasswordModule } from '../components/modal-change-password/modal-change-password.module';
import { ModalChangePasswordComponent } from '../components/modal-change-password/modal-change-password.component';

const routes:Routes=[
  {
    path: "",
    component: LayoutComponent,
    children:[
    
    {  
      path:"list",
      component: ListUsersComponent
    },
    {
      path:"register",
      component: AddUserPageComponent
    },
    {
      path:"details/:uid",
      component: AddUserPageComponent
    }
    ]
  }
];

@NgModule({
  declarations: [ListUsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    AddUserPageModule,
    FormsModule,
    LayoutModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    ModalChangePasswordModule
  ],
  entryComponents:[ModalChangePasswordComponent]
})
export class ListUsersModule { }
