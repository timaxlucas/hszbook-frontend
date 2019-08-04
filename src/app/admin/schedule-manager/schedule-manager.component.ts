import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '@app/_services/schedule.service';
import { first } from 'rxjs/internal/operators/first';
import { Schedule } from '@app/_models/schedule';

@Component({
  selector: 'app-schedule-manager',
  templateUrl: './schedule-manager.component.html',
  styleUrls: ['./schedule-manager.component.css']
})
export class ScheduleManagerComponent implements OnInit {

  
  schedules: Schedule[];
  loaded: boolean = false;

  constructor(
    private scheduleService: ScheduleService
  ) { }

  ngOnInit() {
    this.loadSchedules();
  }

  loadSchedules() {
    this.scheduleService.getAll().pipe(first()).subscribe(data => {
      this.schedules = data.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return +new Date(b.date) - +new Date(a.date);
      });
      this.schedules.map(s => {
        if (s.running)
          s.status = 'running';
        else if (!s.running && s.result === null)
          s.status = 'working';
        else if (!s.running && s.result.success)
          s.status = 'success';
        else if (!s.running && !s.result.success)
          s.status = 'fail';
        return s;
      })
      this.loaded = true;
      console.log(this.schedules);
    }, (error) => {
      console.log("Error while getting schedules: " + error)
    })
  }

  cancelSchedule(s) {
    this.scheduleService.cancel(s.id).pipe(first()).subscribe(res => {
      this.loadSchedules();
    }, err => {
      console.log(err);
    })
  }

}
