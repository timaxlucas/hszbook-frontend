import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '@app/_services/schedule.service';
import { first } from 'rxjs/internal/operators/first';
import { Schedule } from '@app/_models/schedule';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  schedules: Schedule[];

  constructor(
    private scheduleService: ScheduleService
  ) { }

  ngOnInit() {
    this.loadSchedules();
  }

  loadSchedules() {
    this.scheduleService.getMine().pipe(first()).subscribe(data => {
      this.schedules = data;
      console.log(this.schedules);
    }, (error) => {
      console.log("Error while getting schedules: " + error)
    })
  }

  cancelSchedule(s) {
    this.scheduleService.cancel(s.user, s.kid).pipe(first()).subscribe(res => {
      this.loadSchedules();
    }, err => {
      console.log(err);
    })
  }


}
