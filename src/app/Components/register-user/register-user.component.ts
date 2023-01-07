import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../Services/user.service";
import {User} from "../../Models/user";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User = new User()

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.userService.registerUser(this.user).subscribe( data => {
        console.log(data)
        this.getUser();
      },
      error => console.log(error));
  }

  getUser() {
    this.router.navigate(['/users']);
  }

  onSubmit() {
    console.log(this.user)
    this.registerUser()
  }

}
