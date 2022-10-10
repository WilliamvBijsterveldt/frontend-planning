import { Component, OnInit } from '@angular/core';
import {Planning} from "../planning";
import {PlanningService} from "../planning.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-planning',
  templateUrl: './update-planning.component.html',
  styleUrls: ['./update-planning.component.css']
})
export class UpdatePlanningComponent implements OnInit {
  id: number;

  planning: Planning = new Planning();

  constructor(private planningService: PlanningService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.planningService.getPlanningById(this.id).subscribe(data => {
      this.planning = data;
    },
      error => console.log(error));
  }

  onSubmit() {
    this.planningService.updatePlanning(this.id, this.planning).subscribe(data => {
        this.goToPlannings();
      },
      error => console.log(error));
  }

  goToPlannings() {
    this.router.navigate(['/plannings']);
  }
}
