import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './courses/courses.component';
import { RegisterComponent } from './register/register.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatherIconsPipe } from '@app/_helpers/feather.pipe';
import { CalendarMomentPipe } from '@app/_helpers/calendar.pipe';


@NgModule({
    declarations: [
        HomeComponent,
        CoursesComponent,
        RegisterComponent,
        SchedulesComponent,
        DashboardComponent,
        FeatherIconsPipe,
        CalendarMomentPipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        RouterModule,
        HomeRoutingModule,
        ReactiveFormsModule
    ]
})
export class HomeModule { }
