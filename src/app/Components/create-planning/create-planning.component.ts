import { Component, OnInit } from '@angular/core';
import {Planning} from "../../Models/planning";
import {PlanningService} from "../../Services/planning.service";
import {Router} from "@angular/router";
import {CreatePlanning} from "../../Models/create-planning";
import {Coordinate} from "../../Models/coordinate";

@Component({
  selector: 'app-create-planning',
  templateUrl: './create-planning.component.html',
  styleUrls: ['./create-planning.component.css']
})
export class CreatePlanningComponent implements OnInit {

  createPlanning: CreatePlanning = new CreatePlanning();

  constructor(private planningService: PlanningService,
              private router: Router) {

    this.createPlanning.planning = new Planning();
  }

  ngOnInit(): void {
    this.getLocation();
  }

  savePlanning(){
    this.planningService.createPlanning(this.createPlanning).subscribe( data => {
        console.log(data)
        this.getPlanning();
      },
      error => console.log(error));
  }

  getPlanning() {
    this.router.navigate(['/plannings']);
  }

  onSubmit() {
    console.log(this.createPlanning)
    this.savePlanning()
  }

  getLocation(): void {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lon = position.coords.longitude;
        const lat = position.coords.latitude;

        this.createPlanning.coordinate = new Coordinate(lat, lon);
      });
    } else {
      console.log("No support for geolocation")
    }
  }

  validate(){
    const form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      // @ts-ignore
      event.preventDefault();
      // @ts-ignore
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  }

}
