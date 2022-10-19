import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {UpdatePlanningComponent} from "./Components/update-planning/update-planning.component";
import {PlanningListComponent} from "./Components/planning-list/planning-list.component";
import {CreatePlanningComponent} from "./Components/create-planning/create-planning.component";

const routes: Routes = [
  {path: '', redirectTo: 'plannings', pathMatch: 'full'},
  {path: 'update/:id', component: UpdatePlanningComponent},
  {path: 'plannings', component: PlanningListComponent},
  {path: 'create', component: CreatePlanningComponent},
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
