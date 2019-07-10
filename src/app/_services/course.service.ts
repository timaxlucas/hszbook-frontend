import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { first } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService implements OnInit, OnDestroy {

  public sports: BehaviorSubject<string[]> = new BehaviorSubject([]);
  public selectedSport: BehaviorSubject<string> = new BehaviorSubject(JSON.parse(localStorage.getItem('selectedSport')));

  private sportSubscription: Subscription;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.sportSubscription = this.getSports().pipe(first()).subscribe((d: string[]) => {
      console.log(d);
      this.sports.next(d);
    });
  }

  ngOnDestroy() {
    this.sportSubscription.unsubscribe();
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
