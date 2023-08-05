import { CanActivateFn } from '@angular/router';
import { SellerService } from './services/seller.service';

export const sellerAuthGuard: CanActivateFn= (route, state)  => 
{
  
  return true;
};
