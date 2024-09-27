import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AssignedTaskComponent } from './assigned-task/assigned-task.component';
import { LeadManagementComponent } from './lead-management/lead-management.component';
import { TaskManagementComponent } from './task-management/task-management.component';
import { ImportLeadsComponent } from './import-leads/import-leads.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubmitedTaskComponent } from './submited-task/submited-task.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent, 
    children: [
      
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },

      { path: 'assigned-task', component: AssignedTaskComponent },
      { path: 'lead-management', component: LeadManagementComponent },
      { path: 'task-management', component: TaskManagementComponent },
      { path: 'import-leads', component: ImportLeadsComponent },
      { path: 'user-management', component: UserManagementComponent },
      {path:'submited-task', component:SubmitedTaskComponent},
      { path: '', redirectTo: 'assigned-task', pathMatch: 'full' } // Default route for employees
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
