import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from '../app/app.component';
import {ListProductComponent} from '../app/list-product/list-product.component';
import {DashBoardPedidosComponent} from '../app/dash-board-pedidos/dash-board-pedidos.component';
import {AddUserComponent} from '../app/add-user/add-user.component';


const routes: Routes = [
  { path: '', component: AppComponent , pathMatch: 'full'  },
  { path: 'produtos', component: ListProductComponent , pathMatch: 'full'},
  { path: 'pedidos', component: DashBoardPedidosComponent , pathMatch: 'full'},
  { path: 'usuario', component: AddUserComponent , pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
