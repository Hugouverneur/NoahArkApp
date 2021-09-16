import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

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

  getRooms(roomId: number) {
    return this.request('GET', `${environment.serverUrl}/room/${roomId}`);
  }

  createRooms(room) {
    return this.request('POST', `${environment.serverUrl}/room`, room);
  }

  deleteRoom(room) {
    return this.request('DELETE', `${environment.serverUrl}/room/${room.room_id}`, room);
  }
}
