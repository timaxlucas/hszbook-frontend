import { Component, OnInit } from '@angular/core';
import { CourseService } from '@app/_services/course.service';
import { first } from 'rxjs/internal/operators/first';
import { Course } from '@app/_models/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  lastUpdate: Date;

  constructor(
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.courseService.getAll().pipe(first()).subscribe(data => {
      //
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
    this.router.navigate(['/register'], {state: {data: c} });
  }

}
