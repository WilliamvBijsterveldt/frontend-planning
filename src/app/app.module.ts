import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import { UpdatePlanningComponent } from './update-planning/update-planning.component';
import { PlanningListComponent } from './planning-list/planning-list.component';
import { CreatePlanningComponent } from './create-planning/create-planning.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule} from "angularx-flatpickr";
import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UpdatePlanningComponent,
    PlanningListComponent,
    CreatePlanningComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterOutlet,
    RouterLinkWithHref,
    FormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgbModule,
    NgbModalModule,
    FlatpickrModule
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
