import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class StorageService {

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

  getStorages(siteId: number) {
    return this.request('GET', `${environment.serverUrl}/storage/${siteId}`);
  }

  createStorages(storage) {
    return this.request('POST', `${environment.serverUrl}/storage`, storage);
  }

  deleteStorage(storage) {
    return this.request('DELETE', `${environment.serverUrl}/Storage/${storage.storage_id}`, storage);
  }
}
