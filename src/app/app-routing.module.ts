import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
    
  },{
  path:'seller-auth',
  component:SellerAuthComponent
},
{
  path:'seller-home',
  component:SellerHomeComponent,
  canActivate:[AuthguardGuard]

}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
