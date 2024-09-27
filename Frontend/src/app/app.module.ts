import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportLeadsComponent } from './import-leads/import-leads.component';
import { LeadManagementComponent } from './lead-management/lead-management.component';
import { TaskManagementComponent } from './task-management/task-management.component';
import { AssignedTaskComponent } from './assigned-task/assigned-task.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LeadManagementService } from './lead-management/lead-management.service';
import { TaskManagementService } from './task-management/task-management.service';
import { ImportLeadsService } from './import-leads/import-leads.service';
import { SubmitedTaskService } from './submited-task/submited-task.service';
import {HttpClientModule } from '@angular/common/http';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserService } from './user-management/user.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SubmitedTaskComponent } from './submited-task/submited-task.component';



@NgModule({
  declarations: [
    AppComponent,
    ImportLeadsComponent,
    LeadManagementComponent,
    TaskManagementComponent,
    AssignedTaskComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    UserManagementComponent,
    SubmitedTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
   
  ],
  providers: [
    LeadManagementService,
    TaskManagementService,
    ImportLeadsService,
    UserService,
    SubmitedTaskService,
    provideAnimationsAsync()
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
