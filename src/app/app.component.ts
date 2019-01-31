import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService, User } from './auth/shared/sevice/auth.service';

import { Observable, Subscription } from 'rxjs';
import { Store } from './store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  user$: Observable<User>;
  subscription: Subscription;

  constructor(
    private authService: AuthService,
    private store: Store,
    private router: Router
  ) {}

  public ngOnInit() {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onLogOut() {
    this.authService.logOutUser();
    this.router.navigate(['/auth/login']);
  }
}
