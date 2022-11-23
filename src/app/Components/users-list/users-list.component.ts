import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../Services/user.service";
import {User} from "../../Models/user";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  private getUsers() {
    this.userService.getUser().subscribe(data => {
      this.users = data;
    });
  }

  updateUser(id: number) {
    this.router.navigate(['update-user', id]);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(data => {
        console.log(data)
        this.getUsers();
      },
      error => console.log(error));
  }
}
