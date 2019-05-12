import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ScheduleManagerComponent } from './schedule-manager/schedule-manager.component';


@NgModule({
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        ScheduleManagerComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        RouterModule,
        AdminRoutingModule,
        ReactiveFormsModule
    ]
})
export class AdminModule { }
