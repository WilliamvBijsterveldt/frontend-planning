import { Component, OnInit } from '@angular/core';
import {User} from "../../Models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../Services/user.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id: number;

  user: User = new User();

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.userService.getUserById(this.id).subscribe(data => {
        this.user = data;
      },
        error => console.log(error));
  }

  onSubmit() {
    this.userService.updateUser(this.id, this.user).subscribe(data => {
        this.goToUsers();
      },
      error => console.log(error));
  }

  goToUsers() {
    this.router.navigate(['/users']);
  }

}
