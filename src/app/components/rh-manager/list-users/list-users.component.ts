import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: any = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  // Récupération de tous les utilisateurs
  getUsers() {
    this.usersService.getUsers().then((response: any) => {
      console.log(response);
      this.users = response;
    })
  }

}
