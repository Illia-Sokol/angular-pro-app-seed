import { Component } from "@angular/core";
import { Meal, MealsService } from 'src/app/healt/shared/meals/meals.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-meal',
    templateUrl: './meal.component.html',
    styleUrls: ['./meal.component.scss']
})

export class AppMealComponent {
    public async created(event: Meal) {
        await this.mealsService.addMeal(event);
        this.router.navigate(['/meals']);
    }

    constructor(
        private mealsService: MealsService,
        private router: Router
    ) {}
}