import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { first } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public sports: BehaviorSubject<string[]> = new BehaviorSubject([]);
  public selectedSport: BehaviorSubject<string> = new BehaviorSubject(JSON.parse(localStorage.getItem('selectedSport')));

  constructor(private http: HttpClient) {
    this.getSports().pipe(first()).subscribe((d: string[]) => {
      console.log(d);
      this.sports.next(d);
    });
  }

  selectSport(sport: string) {
    this.selectedSport.next(sport);
    localStorage.setItem('selectedSport', JSON.stringify(sport));
  }

  getSports() {
    return this.http.get(`${environment.apiUrl}/course`);
  }

  getCoursesForSport() {
    if (this.selectedSport.value == null) {
      return;
    }
    return this.http.get(`${environment.apiUrl}/course/${this.selectedSport.value}`);
  }

}
