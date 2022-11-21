import { Component, OnInit } from '@angular/core';
import {Planning} from "../../Models/planning";
import {PlanningService} from "../../Services/planning.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-planning',
  templateUrl: './create-planning.component.html',
  styleUrls: ['./create-planning.component.css']
})
export class CreatePlanningComponent implements OnInit {

  planning: Planning = new Planning();

  constructor(private planningService: PlanningService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createPlanning(){
    this.planningService.createPlanning(this.planning).subscribe( data => {
        console.log(data)
        this.getPlanning();
      },
      error => console.log(error));
  }

  getPlanning() {
    this.router.navigate(['/plannings']);
  }

  onSubmit() {
    console.log(this.planning)
    this.createPlanning()
  }

}
