import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from 'rxjs';
import { Meal, MealsService } from 'src/app/healt/shared/meals/meals.service';
import { Store } from '../../../../store';

@Component({
    selector: 'app-meal',
    templateUrl: './meal.component.html',
    styleUrls: ['./meal.component.scss']
})

export class AppMealComponent {
    // public meals$: Observable<Meal[]>;
    // public subsctiption: Subscription;

    // constructor(
    //     private mealsService: MealsService,
    //     private store: Store
    // ) {}

    // public ngOnInit() {
    //     this.subsctiption = this.mealsService.meals$.subscribe();
    //     this.meals$ = this.store.select<Meal[]>('meals');
    // }

    // public ngOnDestroy() {
    //     this.subsctiption.unsubscribe();
    // }
}