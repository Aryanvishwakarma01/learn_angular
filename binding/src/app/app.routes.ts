import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile.component';
import { SetingsComponent } from './dashboard/settings.component';
import { SetingsGeneralComponent } from './dashboard/settings-general.component';
import { SetingsSecurityComponent } from './dashboard/settings-security.component';
import { UserPage } from './user-page/user-page';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
export const routes: Routes = [
    { path: '', component: Login },
    // {path:"home", component:Home},
    // {path:'profile/:name', component:Profile},
    // {path:'about', component:About},
    {path:'dashboard', component:Dashboard},
    // {path:'profile', component:Profile},
    // {path:"user/:id/:name", component:UserPage},
    // {path:'**', component:PageNotFound},
];

// export const routes: Routes = [
//     { path: '', redirectTo:'dashboard', pathMatch:'full'} ,
//     {path:"dashboard", component:DashboardComponent,
//         children:[
//                 {path:'profile', component:ProfileComponent},
//                 {path:'settings', component:SetingsComponent,
//                     children:[
//                         {path:'', redirectTo:'general', pathMatch:'full'},
//                         {path:'general', component:SetingsGeneralComponent},
//                         {path:'security', component:SetingsSecurityComponent}
//                     ]
//                 }
//         ]
//     }
// ]
   