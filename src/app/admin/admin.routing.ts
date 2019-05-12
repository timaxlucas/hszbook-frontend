import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/_guards';
import { AdminComponent } from './admin.component';
import { Role } from '@app/_models';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ScheduleManagerComponent } from './schedule-manager/schedule-manager.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] },
        children: [
            { path: '', component: AdminDashboardComponent},
            { path: 'schedules', component: ScheduleManagerComponent},
            /*{ path: 'create', canActivate: [AuthGuard], component: CreatePostComponent }*/
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
