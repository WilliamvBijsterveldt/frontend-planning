import {Component, OnInit} from '@angular/core';
import {Planning} from "../../Models/planning";
import {PlanningService} from "../../Services/planning.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-planning-list',
  templateUrl: './planning-list.component.html',
  styleUrls: ['./planning-list.component.css']
})
export class PlanningListComponent implements OnInit {

  plannings: Planning[];

  constructor(private planningService: PlanningService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getPlannings();
  }

  private getPlannings() {
    this.planningService.getPlanning().subscribe(data => {
      this.plannings = data;
    });
  }

  updatePlanning(id: number) {
    this.router.navigate(['update-planning', id]);
  }

  deletePlanning(id: number) {
    this.planningService.deletePlanning(id).subscribe(data => {
        console.log(data)
        this.getPlannings();
      },
      error => console.log(error));
  }
}
