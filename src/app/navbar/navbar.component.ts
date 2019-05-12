import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '@app/_services';
import { User, Role } from '@app/_models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    currentUser: User;
    searchForm: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            search: ['', Validators.required]
        });

    }

    onSearchSubmit() {
        // stop here if form is invalid
        if (this.searchForm.invalid) {
            return;
        }

        this.router.navigate([],{ queryParams: { s: this.searchForm.controls.search.value } });
    }


    logout() {
        this.authenticationService.logout();
    }

}
