import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  setDefaultData(data) {
    let body = new URLSearchParams();
    body.set('firstname', data.firstName);
    body.set('surname', data.lastName);
    body.set('gender', data.gender);
    body.set('street', data.street);
    body.set('city', data.city);
    body.set('matrnr', data.matrnr);
    body.set('email', data.email);
    body.set('phone', data.phone);
    body.set('iban', data.iban);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(`${environment.apiUrl}/users/setDefaultData`, body.toString(), options);
  }

  getDefaultData() {
    return this.http.get(`${environment.apiUrl}/users/getDefaultData`);
  }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: number) {
    return this.http.get(`${environment.apiUrl}/users/${id}`);
  }

  getByUsername(username: string) {
    return this.http.get(`${environment.apiUrl}/users/username/${username}`);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }
}
