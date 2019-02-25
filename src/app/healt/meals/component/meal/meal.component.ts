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
    public created(event) {
        console.log('create', event);
    }
}