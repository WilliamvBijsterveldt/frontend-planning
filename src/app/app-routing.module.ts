import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {UpdatePlanningComponent} from "./update-planning/update-planning.component";
import {PlanningListComponent} from "./planning-list/planning-list.component";
import {CreatePlanningComponent} from "./create-planning/create-planning.component";
import {CalendarComponent} from "./calendar/calendar.component";

const routes: Routes = [
  {path: 'calendar', component: CalendarComponent},
  {path: '', redirectTo: 'calendar', pathMatch: 'full'},
  {path: 'update/:id', component: UpdatePlanningComponent},
  {path: 'plannings', component: PlanningListComponent},
  {path: 'create', component: CreatePlanningComponent}
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
