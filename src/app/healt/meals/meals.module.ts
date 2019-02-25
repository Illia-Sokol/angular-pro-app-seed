import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AppMealsComponent } from './component/meals/meals.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AppMealComponent } from './component/meal/meal.component';
import { AppFormMealComponent } from './component/meal-form/meal-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const ROUTES: Routes = [
    { path: '', component: AppMealsComponent },
    { path: 'new', component: AppMealComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppMealsComponent,
        AppMealComponent,
        AppFormMealComponent
    ],
    exports: [
        AppMealsComponent
    ]
})
export class MealsModule {}