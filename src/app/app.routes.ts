import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LayoutsComponent } from './component/layouts/layouts.component';
import { HomeComponent } from './component/home/home.component';
import { AuthServiceService } from './sevices/auth-service.service';
import { inject } from '@angular/core';
import { CustomersComponent } from './component/customers/customers.component';
import { DepotsComponent } from './component/depots/depots.component';
import { ProductsComponent } from './component/products/products.component';
import { RecipesComponent } from './component/recipes/recipes.component';
import { RecipeDetailsComponent } from './component/recipe-details/recipe-details.component';
import { OrderComponent } from './component/order/order.component';
import { RequirementsPlanningComponent } from './component/requirements-planning/requirements-planning.component';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { ProductionComponent } from './component/production/production.component';

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "requirements-planning/:orderId",
    component: RequirementsPlanningComponent,
    canActivate: [()=> inject(AuthServiceService).isAuthenticated()]
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
      },
      {
        path:"products",
        component: ProductsComponent
      },
      {
        path:"recipes",
        component: RecipesComponent
      },
      {
        path:"recipe-details/:id",
        component: RecipeDetailsComponent
      },
      {
        path:"orders",
        component: OrderComponent
      },
      {
        path:"invoices/:type",
        component: InvoiceComponent
      },
      {
        path:"productions",
        component: ProductionComponent
      },
    ]
  },
];
