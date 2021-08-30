import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ClassService {

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

  // Récupération des classes
  getClass() {
    return this.request('GET', `${environment.serverUrl}/class`);
  }

  // Creation d'une nouvelle classe
  // Class est écrit avec un "e" pour éviter les problèmes de nommages. Class étant un mot réservé.
  createClass(classe) {
    return this.request('POST', `${environment.serverUrl}/class`, classe);
  }

  // Suppression d'une classe
  deleteClass(classe) {
    return this.request('DELETE', `${environment.serverUrl}/class/${classe.class_id}`, classe);
  }
}
