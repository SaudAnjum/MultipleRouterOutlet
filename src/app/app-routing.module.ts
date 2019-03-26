import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';

const routes: Routes = [
  {
    path: '', component: NavbarComponent
  },
  {
    path: 'orders', component: OrderComponent, outlet: 'divOne'
  },
  {
    path: 'products', component: ProductsComponent, outlet: 'divTwo'
  },
  {
    path: 'checkOut', component: CheckOutComponent, outlet: 'divThree'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
