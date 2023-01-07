import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {UpdatePlanningComponent} from "./Components/update-planning/update-planning.component";
import {PlanningListComponent} from "./Components/planning-list/planning-list.component";
import {CreatePlanningComponent} from "./Components/create-planning/create-planning.component";
import {RegisterUserComponent} from "./Components/register-user/register-user.component";
import {UsersListComponent} from "./Components/users-list/users-list.component";
import {UpdateUserComponent} from "./Components/update-user/update-user.component";
import {LoginComponent} from "./Components/login/login.component";

const routes: Routes = [
  {path: '', redirectTo: 'plannings', pathMatch: 'full'},
  {path: 'update-planning/:id', component: UpdatePlanningComponent},
  {path: 'plannings', component: PlanningListComponent},
  {path: 'create-planning', component: CreatePlanningComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'update-user', component: UpdateUserComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
