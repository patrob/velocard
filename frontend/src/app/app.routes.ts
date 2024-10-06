import { Routes } from "@angular/router";
import { DashboardComponent } from "./views/dashboard/dashboard.component";

export const routeNames = {
  dashboard: "",
};

export const routes: Routes = [
  {
    path: routeNames.dashboard,
    component: DashboardComponent,
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: routeNames.dashboard,
  },
];

