import { Injectable, Component } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { distinctUntilChanged, pluck } from 'rxjs/operators'
 
import { User } from './auth/shared/sevice/auth.service';
import { Meal } from './healt/shared/meals/meals.service';

export interface State {
    user: User;
    [key: string]: any;
    meals: Meal;
}

const state: State = {
    user: undefined,
    meals: undefined
};

@Injectable()
export class Store {
    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable().pipe(distinctUntilChanged());

    get value() {
        return this.subject.value;
    }

    set(name: string, state: any) {
        this.subject.next({...this.value, [name]: state});
    }

    select<T>(name: string): Observable<T> {
        return this.store.pipe(pluck(name));
    }
}
