import { Injectable } from "@angular/core";
import { Store } from '../../../store';
import { AngularFireDatabase } from '@angular/fire/database/';
import { AuthService } from '../../../auth/shared/sevice/auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

export interface Meal {
    name: string;
    ingridients: string[];
    timestamp: number;
    $key: string;
    $exist: () => boolean;
}

@Injectable()
export class MealsService {
    public meals$: Observable<Meal[]> = this.db.list<any>(`meals/${this.uid}`)
        .valueChanges()
        .pipe(
            tap(next => {
                this.store.set('meals', next)
            } )
        );

    constructor(
        private store: Store,
        private db: AngularFireDatabase,
        private authService: AuthService
    ) {}

    public get uid() {
        return this.authService.user.uid;
    }
}