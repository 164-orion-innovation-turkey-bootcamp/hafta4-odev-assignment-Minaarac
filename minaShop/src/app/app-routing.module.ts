import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GuardGuard } from './guard/auth.guard';

const routes: Routes = [
//  { path:'', component:HomeComponent },
  {path:'', redirectTo:'products',pathMatch:'full'},
  // {path:"products",component:ProductComponent, canActivate:[GuardGuard]},
  { path:'product-single', component:ProductsingleComponent },
  {path:'products',component:ProductComponent},
  { path:'cart', component:CartComponent },
  { path:'checkout', component:CheckoutComponent },
  { path:'shop', component:ShopComponent },
  { path:'order', component:OrdersComponent },
  { path:'login', component:LoginComponent },
  { path:'signup', component:SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
