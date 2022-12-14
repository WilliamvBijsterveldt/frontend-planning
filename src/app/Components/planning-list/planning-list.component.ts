import {Component, OnInit} from '@angular/core';
import {Planning} from "../../Models/planning";
import {PlanningService} from "../../Services/planning.service";
import {Router} from "@angular/router";
import {MatDialog, MatDialogModule, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-planning-list',
  templateUrl: './planning-list.component.html',
  styleUrls: ['./planning-list.component.css']
})
export class PlanningListComponent implements OnInit {

  plannings: Planning[];

  constructor(private planningService: PlanningService,
              private router: Router,
              private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getPlannings();
  }

  getPlannings() {
    this.planningService.getPlanning().subscribe(data => {
      this.plannings = data;
    });
  }

  updatePlanning(id: number) {
    this.router.navigate(['update-planning', id]);
  }

  deletePlanning(id: number) {
    this.planningService.deletePlanning(id).subscribe(() => {
        this.getPlannings();
      },
      error => console.log(error));
  }

  showWeather() {
    this.matDialog.open(DialogComponent, {
      data: {

      }
    })
  }

  goToCreatePage() {
    this.router.navigate(['create-planning']);
  }
}
