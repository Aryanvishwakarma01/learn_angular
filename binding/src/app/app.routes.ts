import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';
export const routes: Routes = [
    { path: '', component: Headers },
    {path:"home", component:Home},
    {path:'about', component:About},
    {path:'profile', component:Profile},
    {path:'**', component:PageNotFound},
];

