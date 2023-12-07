import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {ListProductComponent} from './list-product/list-product.component';
import {DashBoardOrdersComponent} from './dash-board-orders/dash-board-orders.component';
import {AddUserComponent} from './add-user/add-user.component';
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'  },
  { path: 'login', component: LoginComponent , pathMatch: 'full'  },
  { path: 'produtos', component: ListProductComponent , pathMatch: 'full'},
  { path: 'pedidos', component: DashBoardOrdersComponent , pathMatch: 'full'},
  { path: 'usuario', component: AddUserComponent , pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
