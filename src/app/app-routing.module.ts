import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent}  from './dashboard/dashboard.component'
import{ProductComponent} from './product/product.component'
import{ProductTableComponent} from './product-table/product-table.component'
import{UserComponent}  from './user/user.component'
import{UserTableComponent}  from './user-table/user-table.component'
import{ProductEditComponent} from './product-edit/product-edit.component'
import{UserEditComponent} from './user-edit/user-edit.component'
const routes: Routes = [
  {
    path:"dashboard",
    component: DashboardComponent
  },
  {
     path:"product",
     component:ProductComponent
  },
  {
    path:"product-edit/:id",
    component:ProductEditComponent
  },
  {
    path:"product-table",
    component:ProductTableComponent
  },
  {
    path:"user",
    component:UserComponent
  },
  {
    path:"user-edit/:id",
    component:UserEditComponent
  },
  {
    path:"user-table",
    component:UserTableComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
