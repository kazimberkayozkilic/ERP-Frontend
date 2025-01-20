import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LayoutsComponent } from './component/layouts/layouts.component';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: LayoutsComponent,
    children: [
      {
        path:"",
        component: HomeComponent
      }
    ]
  },
];
