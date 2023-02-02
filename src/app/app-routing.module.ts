import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import {SellerAuthComponent} from './seller-auth/seller-auth.component'
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';


const routes: Routes = [
{path:"" , component:HomeComponent},
{path:"seller-home",component:SellerHomeComponent,canActivate:[AuthGuard]},
{path:"seller-auth",component:SellerAuthComponent},
{path:'seller-add-product',component:SellerAddProductComponent,canActivate:[AuthGuard]},
{path:'seller-update-product',component:SellerUpdateProductComponent,canActivate:[AuthGuard]}
// // {path:"**",component:HeaderComponent}     /here we can do 404 page by using this line */
// //*******************important*************** 

// here we must use /////AuthGuard if we don't want to redirect..


// */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
