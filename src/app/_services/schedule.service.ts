import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Schedule } from '@app/_models/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  getMine() {
    return this.http.get<Schedule[]>(`${environment.apiUrl}/schedule`);
  }

  getAll() {
    return this.http.get<Schedule[]>(`${environment.apiUrl}/schedule/all`);
  }

  cancel(id) {
    let body = new URLSearchParams();
    body.set('id', id);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(`${environment.apiUrl}/schedule/cancel`, body.toString(), options)
  }

  registerForCourse(data) {
    let body = new URLSearchParams();
    body.set('date', data.date);
    body.set('kid', data.kid);
    body.set('firstname', data.firstName);
    body.set('surname', data.lastName);
    body.set('gender', data.gender);
    body.set('street', data.street);
    body.set('city', data.city);
    body.set('matrnr', data.matrnr);
    body.set('email', data.email);
    body.set('phone', data.phone);
    body.set('iban', data.iban);
    body.set('link', "https://buchung.hsz.rwth-aachen.de/angebote/Sommersemester_2019/_Volleyball_Spielbetrieb.html");

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(`${environment.apiUrl}/schedule`, body.toString(), options)
  }

}
