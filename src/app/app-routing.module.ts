import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  // path set for user defined component
  {
    // bydefault its path become angular localhost path,component is name of logincomponent.

    path:'',component:LoginComponent
},
{
  // dashboard path
  path:'dashboard',component:DashboardComponent
  
},
{
  path:'register',component:RegisterComponent
},
{
  path:'transaction',component:TransactionComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
