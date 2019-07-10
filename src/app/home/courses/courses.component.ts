import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from '@app/_services/course.service';
import { first } from 'rxjs/internal/operators/first';
import { Course } from '@app/_models/course';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {

  courses: Course[];
  lastUpdate: Date;

  selectedSport: string;
  link: string;
  sports: string[];

  private sportsSubscription: Subscription;
  private selectedSportSubscription: Subscription;

  constructor(
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.selectedSportSubscription = this.courseService.selectedSport.subscribe(sport => {
      this.selectedSport = sport;
      this.updateCourses();
    });
    this.sportsSubscription = this.courseService.sports.subscribe(sports => {
        this.sports = sports;
    });
  }

  ngOnDestroy() {
    this.sportsSubscription.unsubscribe();
    this.selectedSportSubscription.unsubscribe();
  }

  updateCourses() {
    if (this.selectedSport === null)
      return;

    this.courseService.getCoursesForSport().pipe(first()).subscribe(data => {
      this.link = data['link'];
      this.courses = data['data'].sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return +new Date(a.bookingDate) - +new Date(b.bookingDate);
      });
      console.log(this.courses);
      this.lastUpdate = data['timestamp'];
    }, (error) => {
      console.log("Error while getting courses: "+error)
    })
  }

  registerFor(c) {
    c['link'] = this.link;
    c['sport'] = this.selectedSport;
    this.router.navigate(['/register'], {state: {data: c} });
  }

}
