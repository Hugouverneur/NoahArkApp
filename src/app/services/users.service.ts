import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  // Methode préfaite pour faire nos requetes vers la base de donnée
  private async request(method: string, url: string, data?: any) {
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });

    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  // Récupération des utilisateurs
  getUsers() {
    return this.request('GET', `${environment.serverUrl}/users`);
  }

  // Creation d'un nouvel utilisateur
  createUser(user) {
    return this.request('POST', `${environment.serverUrl}/users`, user);
  }

  // Modification d'un utilisateur
  updateUser(user) {
    return this.request('PUT', `${environment.serverUrl}/user/${user.user_id}`, user);
  }

  // Suppression d'un utilisateur
  deleteUser(user) {
    return this.request('DELETE', `${environment.serverUrl}/user/${user.user_id}`, user);
  }



}
