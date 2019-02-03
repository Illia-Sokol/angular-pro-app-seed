import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';

import { Store } from 'src/app/store';

import { tap } from 'rxjs/operators';

export interface User {
    email: string,
    uid: string,
    authenticated: boolean
}

@Injectable()
export class AuthService {
    public auth$ = this.af.authState.pipe(
        tap(next => {
            if(!next) {
                this.store.set('user', null)
                return;
            }
            const user: User = {
                email: next.email,
                uid: next.uid,
                authenticated: true
            }
            this.store.set('user', user);
         }) )
    
    public get authState() {
        return this.af.authState;
    }

    constructor(
        private store: Store,
        private af: AngularFireAuth
    ) {}

    createUser(email: string, password: string) {
        return this.af.auth
            .createUserWithEmailAndPassword(email, password);
    }

    loginUser(email: string, password: string) {
        return this.af.auth
            .signInWithEmailAndPassword(email, password);
    }

    logOutUser() {
       return this.af.auth.signOut();
    }
}