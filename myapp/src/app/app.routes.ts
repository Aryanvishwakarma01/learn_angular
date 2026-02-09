import { Routes } from '@angular/router';
import { Product } from './product/product';
import { Profile } from './profile/profile';
export const routes: Routes = [
     { path: '', component: Product },          // default route
  { path: 'about', component: Profile },
   { path: '**', redirectTo: '' }  
];