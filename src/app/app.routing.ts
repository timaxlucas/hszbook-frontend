import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { AdminComponent } from './admin';
import { AuthGuard } from './_guards';
import { Role } from './_models';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    /*
    {
        path: 'register',
        component: RegisterComponent
    },*/

    // otherwise redirect to home
    // maybe put a 404 not found
    {
        path: '**',
        redirectTo: ''
    }
];

export const routing = RouterModule.forRoot(appRoutes);