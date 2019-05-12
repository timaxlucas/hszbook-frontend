import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from '@app/_models';
import { AuthenticationService } from '@app/_services';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({ 
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    currentUser: User;
    currentUserSubscription: Subscription;

    

    constructor(
        private authenticationService: AuthenticationService,
        private activatedRoute: ActivatedRoute
    ) {
        this.activatedRoute.params.subscribe(params => {
            //console.log(params);
        })
        //this.search = this.activatedRoute.snapshot.paramMap.get['keyword'];
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
      }

    ngOnInit() {
        
    }
}