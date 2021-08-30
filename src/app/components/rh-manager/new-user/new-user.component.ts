import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  addUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private route: Router) { }

  ngOnInit(): void {
    this.initaddUserForm();
  }

  // Initialisation du formulaire
  initaddUserForm() {
    this.addUserForm = this.formBuilder.group({
      user_name: ['', [Validators.required]],
      user_lastname: ['', [Validators.required]],
      user_email: ['', [Validators.email, Validators.required]]
    });
  }

  // Validation des données du formulaire
  onaddUserFormSubmit() {
    const user_name: string = this.addUserForm.get('user_name').value;
    const user_lastname: string = this.addUserForm.get('user_lastname').value;
    const user_email: string = this.addUserForm.get('user_email').value;
    const newUser = {user_name: user_name, user_lastname: user_lastname, user_email: user_email};
    return newUser;
  }

  // Créer un utilisateur
  createUser() {
    const newUser = this.onaddUserFormSubmit();
    this.usersService.createUser(newUser);
    this.route.navigate(['/user-list']);
  }

}
