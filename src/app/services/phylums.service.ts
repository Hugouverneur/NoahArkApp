import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class PhylumsService {

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

  // Récupération des embranchement
  getPhylums() {
    return this.request('GET', `${environment.serverUrl}/phylum`);
  }

  // Creation d'un nouvel embranchement
  createPhylums(phylum) {    
    return this.request('POST', `${environment.serverUrl}/phylum`, phylum);
  }

  // Suppression d'un embranchement
  deletePhylums(phylum) {
    return this.request('DELETE', `${environment.serverUrl}/phylum/${phylum.phylum_id}`, phylum);
  }
}
