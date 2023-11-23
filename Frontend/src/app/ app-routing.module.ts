//AppRoutingModule 
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AddComponent } from './components/add/add.component';
import { ViewComponent } from './components/view/view.component';
import { EditComponent } from './components/edit/edit.component';

//rounting path
const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent },
  { path: 'edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
