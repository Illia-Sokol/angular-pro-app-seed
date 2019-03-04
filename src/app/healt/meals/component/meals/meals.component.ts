import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from 'rxjs';
import { Meal, MealsService } from 'src/app/healt/shared/meals/meals.service';
import { Store } from '../../../../store';

@Component({
    selector: 'app-meals',
    templateUrl: './meals.component.html',
    styleUrls: ['./meals.component.scss']
})

export class AppMealsComponent implements OnInit, OnDestroy {
    public meals$: Observable<Meal[]>;
    public subsctiption: Subscription;

    constructor(
        private mealsService: MealsService,
        private store: Store
    ) {}

    public ngOnInit() {
        this.meals$ = this.store.select<Meal[]>('meals');
        this.subsctiption = this.mealsService.meals$.subscribe();
    }

    public ngOnDestroy() {
        this.subsctiption.unsubscribe();
    }

    public removeMeal(item: Meal) {
        this.mealsService.removeMeal(item.$key);
    }
}