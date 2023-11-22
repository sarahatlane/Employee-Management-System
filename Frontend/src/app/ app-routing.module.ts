// // AppRoutingModule ensure that routing is set up and ready to handle navigation within the application.
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AddComponent } from './components/add/add.component';
import { ViewComponent } from './components/view/view.component';
import { ModalComponent } from './modal/modal.component';



const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'add', component: AddComponent},
  { path: 'view', component:ViewComponent},
  { path: 'modal', component:ModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
