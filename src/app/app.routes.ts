import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LayoutsComponent } from './component/layouts/layouts.component';
import { HomeComponent } from './component/home/home.component';
import { AuthServiceService } from './sevices/auth-service.service';
import { inject } from '@angular/core';
import { CustomersComponent } from './component/customers/customers.component';
import { DepotsComponent } from './component/depots/depots.component';

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: LayoutsComponent,
    canActivateChild: [()=> inject(AuthServiceService).isAuthenticated()],
    children: [
      {
        path:"",
        component: HomeComponent
      },
      {
        path:"customers",
        component: CustomersComponent
      },
      {
        path:"depots",
        component: DepotsComponent
      }
    ]
  },
];
