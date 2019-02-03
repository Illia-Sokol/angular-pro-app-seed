import { Injectable } from '@angular/core';
import { AuthService } from '../sevice/auth.service';
import { Router, CanActivate } from '@angular/router';

import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuardsComponent implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    public canActivate() {
      return this.authService.authState
        .pipe(
          map( (user) => {
            if(!user) {
              this.router.navigate(['auth/login']);
            }
            return !!user;
            }
          )
        )
    }
}