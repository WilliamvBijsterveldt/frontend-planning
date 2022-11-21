import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";
import { AppComponent } from './Components/App-component/app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import { UpdatePlanningComponent } from './Components/update-planning/update-planning.component';
import { PlanningListComponent } from './Components/planning-list/planning-list.component';
import { CreatePlanningComponent } from './Components/create-planning/create-planning.component';
import { RegisterUserComponent } from './Components/register-user/register-user.component';
import { UsersListComponent } from './Components/users-list/users-list.component';
import { UpdateUserComponent } from './Components/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdatePlanningComponent,
    PlanningListComponent,
    CreatePlanningComponent,
    RegisterUserComponent,
    UsersListComponent,
    UpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterOutlet,
    RouterLinkWithHref,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
