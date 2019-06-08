import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ScheduleService } from '@app/_services/schedule.service';
import { first } from 'rxjs/operators';
import { Schedule } from '@app/_models/schedule';
import { AlertService, UserService } from '@app/_services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data: Schedule;
  registerForm: FormGroup;
  submitted = false;
  valueChanges = false;

  constructor(
    private router: Router,
    private scheduleService: ScheduleService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) {

    let state = this.router.getCurrentNavigation().extras.state;
    if (!state) {
      this.router.navigate(["/courses"]);
    }
    this.data = state.data;
    console.log(this.data);
  }

  ngOnInit() {
    this.userService.getDefaultData().pipe(first()).subscribe((res: any) => {
      const c = this.registerForm.controls;
      c.firstName.setValue(res.firstname);
      c.lastName.setValue(res.surname);
      c.gender.setValue(res.gender);
      c.email.setValue(res.email);
      c.city.setValue(res.city);
      c.street.setValue(res.street);
      c.matrnr.setValue(res.matrnr);
      c.phone.setValue(res.phone);
      c.iban.setValue(res.iban);

      this.detectChanges();
    }, (err) => {
      this.alertService.error(err);
      console.log('setDefaultDataError: ' + err);
    });

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      street: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', Validators.required],
      matrnr: ['', Validators.required],
      phone: ['', Validators.required],
      iban: ['', Validators.required],
      saveCredentials: ['true'],
    });

  }

  private detectChanges() {
    this.registerForm.valueChanges.subscribe(val => {
      this.valueChanges = true;
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    let data = this.registerForm.value
    data.kid = this.data['kid'];
    data.date = this.data['bookingDate'];

    if (this.registerForm.value.saveCredentials && this.valueChanges) {
      console.log("updating credentials");
      this.userService.setDefaultData(data).pipe(first()).subscribe((res) => {
      }, (err) => {
        this.alertService.error(err);
        console.log('setDefaultDataError: ' + err);
      });
    }

    this.scheduleService.registerForCourse(data).pipe(first()).subscribe((res) => {
      this.router.navigate(["/schedules"]);
    }, (err) => {
      this.alertService.error(err);
      console.log(err);
    });
  }
}
