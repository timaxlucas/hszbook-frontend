import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ScheduleService } from '@app/_services/schedule.service';
import { first } from 'rxjs/operators';
import { Schedule } from '@app/_models/schedule';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data: Schedule;
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private scheduleService: ScheduleService,
    private formBuilder: FormBuilder
  ) {

    let state = this.router.getCurrentNavigation().extras.state;
    if (!state) {
      this.router.navigate(["/courses"]);
    }
    this.data = state.data;
    console.log(this.data);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      street: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', Validators.required],
      matrnr: ['', Validators.required],
      phone: ['', Validators.required],
      iban: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    console.log(this.registerForm.controls.gender);
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    let data = this.registerForm.value
    data.kid = this.data['kid'];
    data.date = this.data['bookingDate'];

    this.scheduleService.registerForCourse(data).pipe(first()).subscribe((res) => {
      this.router.navigate(["/courses"]);
    }, (err) => {
      console.log(err);
    });
  }
}
