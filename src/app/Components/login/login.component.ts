import {Component, OnInit} from '@angular/core';
import {User} from "../../Models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user:User = new User();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }



}
