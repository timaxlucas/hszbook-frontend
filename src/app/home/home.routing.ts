import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/_guards';
import { HomeComponent } from './home.component';
import { CoursesComponent } from './courses/courses.component';
import { RegisterComponent } from './register/register.component';
import { SchedulesComponent } from './schedules/schedules.component';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: HomeComponent,
        children: [
            { path: 'courses', component: CoursesComponent},
            { path: 'schedules', component: SchedulesComponent},
            { path: 'register', component: RegisterComponent}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
