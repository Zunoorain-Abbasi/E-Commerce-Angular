import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  constructor(private seller: SellerService,private router:Router) { }
  showlogin=false;
  ngOnInit()
  {
    this.seller.reloadSeller();
  }
  signup(val: any) {
  this.seller.usersignup(val)}
  login(val:any){

    console.warn(val)
  }


  
  openlogin(){
    this.showlogin=true;

  }
  Signup(){
    this.showlogin=false;
  }
}

