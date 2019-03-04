import { Injectable } from "@angular/core";
import { Store } from '../../../store';
import { AngularFireDatabase } from '@angular/fire/database/';
import { AuthService } from '../../../auth/shared/sevice/auth.service';
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
    public meals$ = this.db.list(`meals/${this.uid}`)
        .snapshotChanges()
        .pipe(
            map(next => {
                this.store.set('meals', next.map(
                    c => {
                        return { ...c.payload.val(), $key: c.payload.key }
                    }
                ) );
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

    public addMeal(meal: Meal) {
        return this.db.list(`meals/${this.uid}`).push(meal);
    }

    public removeMeal(key: string) {
        return this.db.list(`meals/${this.uid}`).remove(key);
    }
}